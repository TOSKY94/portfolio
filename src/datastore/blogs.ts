export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}


export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try{
    const response = await fetch('https://medium.com/feed/@pyrosv');
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

    const items = Array.from(xmlDoc.querySelectorAll('item'));

    return items.map((item: any, index: number) =>{
      const title = item.querySelector('title')?.textContent || 'No title';
      const link = item.querySelector('link')?.textContent || '#';
      const contentEncoded = item.getElementsByTagNameNS('http://purl.org/rss/1.0/modules/content/', 'encoded')[0];
      const rawContent = contentEncoded?.textContent || '';

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = rawContent;
      let textContent = tempDiv.textContent?.trim() || '';

      if (!textContent) {
        const description = item.getElementsByTagName('description')[0]?.textContent || '';
        textContent = description.replace(/<[^>]*>/g, '').trim();
      }

      const excerpt = textContent.substring(0, 200).replace(/\s+/g, ' ') +  (textContent.length > 200 ? '...' : '');
      const wordCount = textContent.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 275) + ' min read';

      const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
      const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';
      const formattedDate = new Date(pubDate).toLocaleDateString('en-US', dateOptions);


      return {
        id: index + 1,
        title: title,
        excerpt: excerpt,
        date: formattedDate,
        readTime: readTime,
        link: link
      };
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}