import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'water-damage-prevention',
    title: 'Essential Water Damage Prevention Tips',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Learn how to protect your home from water damage with these essential prevention tips.',
    content: `
      <h2>Understanding Water Damage Risks</h2>
      <p>Water damage can occur from various sources, including plumbing leaks, roof damage, foundation cracks, and natural disasters. Being proactive about prevention can save you thousands in repairs.</p>
      
      <h3>Common Causes of Water Damage</h3>
      <ul>
        <li>Burst or leaking pipes</li>
        <li>Faulty appliances</li>
        <li>Roof leaks</li>
        <li>Poor drainage</li>
        <li>Foundation cracks</li>
      </ul>

      <h3>Prevention Tips</h3>
      <p>Follow these essential tips to protect your home:</p>
      <ol>
        <li>Regular plumbing inspections</li>
        <li>Install water detection devices</li>
        <li>Maintain proper drainage</li>
        <li>Check appliance hoses regularly</li>
        <li>Keep gutters clean</li>
      </ol>
    `,
    author: 'John Smith',
    tags: ['Prevention', 'Maintenance', 'Water Damage']
  },
  {
    id: '2',
    slug: 'mold-signs',
    title: '5 Early Signs of Mold Growth',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1585414143782-c7321b149442?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Discover the early warning signs of mold growth and how to address them quickly.',
    content: `
      <h2>Why Early Detection Matters</h2>
      <p>Identifying mold growth in its early stages is crucial for preventing health issues and extensive property damage.</p>
      
      <h3>Warning Signs</h3>
      <ol>
        <li>Musty odors</li>
        <li>Visible dark spots</li>
        <li>Peeling wallpaper</li>
        <li>Increased allergic reactions</li>
        <li>Excessive humidity</li>
      </ol>

      <h3>Health Impacts</h3>
      <p>Mold exposure can cause various health issues, including:</p>
      <ul>
        <li>Respiratory problems</li>
        <li>Allergic reactions</li>
        <li>Headaches</li>
        <li>Eye irritation</li>
      </ul>
    `,
    author: 'Sarah Johnson',
    tags: ['Mold', 'Health', 'Inspection']
  },
  {
    id: '3',
    slug: 'fire-safety',
    title: 'Home Fire Safety Guide',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1486162928267-e664739f945b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Essential fire safety tips every homeowner should know to protect their property.',
    content: `
      <h2>Fire Prevention Basics</h2>
      <p>Understanding fire safety is crucial for protecting your home and family.</p>
      
      <h3>Safety Measures</h3>
      <ul>
        <li>Install smoke detectors</li>
        <li>Create evacuation plans</li>
        <li>Maintain fire extinguishers</li>
        <li>Regular electrical inspections</li>
      </ul>

      <h3>Common Fire Hazards</h3>
      <p>Be aware of these potential fire sources:</p>
      <ol>
        <li>Faulty wiring</li>
        <li>Unattended cooking</li>
        <li>Space heaters</li>
        <li>Candles</li>
        <li>Smoking materials</li>
      </ol>
    `,
    author: 'Mike Wilson',
    tags: ['Fire Safety', 'Prevention', 'Emergency']
  }
];