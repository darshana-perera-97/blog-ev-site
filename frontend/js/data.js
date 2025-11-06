// Helper function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Mock Blog Data
const mockBlogPosts = [
  {
    id: '1',
    title: 'The Future of Electric Vehicles: What to Expect in 2025',
    slug: 'the-future-of-electric-vehicles-what-to-expect-in-2025',
    excerpt: 'Explore the latest advancements in EV technology, from solid-state batteries to autonomous driving capabilities that are reshaping the automotive industry.',
    content: `
      <p>The electric vehicle industry is experiencing unprecedented growth and innovation. As we look ahead to 2025, several key trends are shaping the future of transportation.</p>
      
      <h2>Solid-State Battery Technology</h2>
      <p>One of the most anticipated developments is the commercialization of solid-state batteries. These next-generation power sources promise to deliver significantly longer range, faster charging times, and improved safety compared to current lithium-ion batteries. Major manufacturers like Toyota and QuantumScape are racing to bring this technology to market.</p>
      
      <h2>Autonomous Driving Integration</h2>
      <p>Electric vehicles are becoming the platform of choice for autonomous driving technology. The synergy between EVs and self-driving systems is creating new possibilities for urban mobility and transportation services. Companies like Tesla, Waymo, and Cruise are leading the charge in this space.</p>
      
      <h2>Charging Infrastructure Expansion</h2>
      <p>Governments and private companies worldwide are investing billions in expanding charging networks. Ultra-fast charging stations capable of adding 200+ miles of range in under 15 minutes are becoming more common, addressing one of the main concerns of potential EV buyers.</p>
      
      <h2>Affordability and Market Penetration</h2>
      <p>As battery costs continue to decline, electric vehicles are becoming more affordable. By 2025, we expect to see price parity between EVs and traditional internal combustion engine vehicles, which will accelerate adoption rates globally.</p>
      
      <p>The future of electric vehicles is bright, with technology, infrastructure, and market forces aligning to create a sustainable transportation revolution.</p>
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    category: 'Technology',
    tags: ['Innovation', 'Battery Tech', 'Future'],
    image: 'blogs/blogImages/the-future-of-electric-vehicles-what-to-expect-in-2025.jpg',
    publishedDate: 'Nov 2, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Charging Infrastructure: The Key to EV Adoption Success',
    slug: 'charging-infrastructure-the-key-to-ev-adoption-success',
    excerpt: 'Understanding the current state of EV charging networks, from home charging solutions to public fast-charging stations, and what needs to happen for mass adoption.',
    content: `
      <p>The success of electric vehicle adoption hinges on one critical factor: charging infrastructure. Without a reliable, accessible network of charging stations, even the most advanced EVs will struggle to gain mainstream acceptance.</p>
      
      <h2>Current State of Charging Networks</h2>
      <p>Today's charging infrastructure is a patchwork of different networks, charging speeds, and payment systems. Level 2 chargers, which provide 20-30 miles of range per hour, are becoming standard for home and workplace installations. Meanwhile, DC fast chargers capable of 150-350kW are expanding along major highways and in urban centers.</p>
      
      <h2>Home Charging Solutions</h2>
      <p>For most EV owners, home charging is the primary method of keeping their vehicles powered. Level 2 home chargers can be installed in garages or driveways, providing overnight charging that meets daily driving needs. Smart charging systems allow users to schedule charging during off-peak hours, reducing electricity costs.</p>
      
      <h2>Public Fast-Charging Networks</h2>
      <p>Public charging infrastructure is expanding rapidly, with companies like Electrify America, EVgo, and ChargePoint building extensive networks. These stations are crucial for long-distance travel and for EV owners without home charging access. Ultra-fast charging technology is reducing wait times to just 15-20 minutes for a full charge.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Key challenges include standardization of charging connectors, payment systems, and ensuring rural areas have adequate coverage. Governments and private companies are working together to address these issues through funding programs and strategic partnerships.</p>
      
      <p>As charging infrastructure continues to improve, range anxiety will diminish, and electric vehicles will become a practical choice for more consumers.</p>
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    category: 'Infrastructure',
    tags: ['Charging', 'Infrastructure', 'Adoption'],
    image: 'blogs/blogImages/charging-infrastructure-the-key-to-ev-adoption-success.jpg',
    publishedDate: 'Nov 1, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: '3',
    title: 'Tesla Model 3 vs. Ford Mustang Mach-E: A Comprehensive Comparison',
    slug: 'tesla-model-3-vs-ford-mustang-mach-e-a-comprehensive-comparison',
    excerpt: 'We dive deep into two of the most popular electric vehicles on the market, comparing performance, range, features, and value to help you make the right choice.',
    content: `
      <p>Two of the most talked-about electric vehicles on the market today are the Tesla Model 3 and the Ford Mustang Mach-E. Both represent their manufacturers' commitment to electrification, but they approach the EV market from different angles.</p>
      
      <h2>Performance and Power</h2>
      <p>The Tesla Model 3 Performance delivers impressive acceleration, going from 0-60 mph in just 3.1 seconds. The Mach-E GT Performance Edition is no slouch either, achieving 0-60 in 3.5 seconds. Both vehicles offer exhilarating driving experiences, with instant torque delivery that's characteristic of electric powertrains.</p>
      
      <h2>Range Comparison</h2>
      <p>Range is a critical factor for EV buyers. The Model 3 Long Range offers up to 358 miles of EPA-estimated range, while the Mach-E Extended Range provides 312 miles. Both figures are impressive, though Tesla maintains a slight edge in efficiency and range.</p>
      
      <h2>Interior and Technology</h2>
      <p>The Model 3 features a minimalist interior with a single large touchscreen controlling most functions. The Mach-E offers a more traditional layout with a vertical touchscreen and physical controls. Both systems are intuitive, though the choice comes down to personal preference.</p>
      
      <h2>Charging and Infrastructure</h2>
      <p>Tesla's Supercharger network provides a significant advantage for long-distance travel, with thousands of stations across North America. Ford has partnered with Electrify America, but the network isn't as extensive. However, both vehicles support fast charging, with the Model 3 capable of up to 250kW and the Mach-E up to 150kW.</p>
      
      <h2>Value and Pricing</h2>
      <p>The Model 3 starts at around $40,000, while the Mach-E begins at approximately $43,000. Both qualify for federal tax credits, which can significantly reduce the purchase price. The Model 3 offers better value in terms of range per dollar, but the Mach-E provides more interior space and a more traditional SUV experience.</p>
      
      <p>Ultimately, the choice between these two excellent vehicles depends on your priorities: range and charging network (Model 3) or space and traditional SUV appeal (Mach-E).</p>
    `,
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    category: 'Reviews',
    tags: ['Tesla', 'Ford', 'Comparison', 'Review'],
    image: 'blogs/blogImages/tesla-model-3-vs-ford-mustang-mach-e-a-comprehensive-comparison.jpg',
    publishedDate: 'Oct 30, 2025',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: '4',
    title: 'Battery Technology Breakthrough: Solid-State Batteries Explained',
    slug: 'battery-technology-breakthrough-solid-state-batteries-explained',
    excerpt: 'Solid-state batteries promise longer range, faster charging, and improved safety. Learn how this revolutionary technology works and when it will hit the market.',
    content: `
      <p>Solid-state batteries represent the next major leap in electric vehicle battery technology. Unlike current lithium-ion batteries that use liquid electrolytes, solid-state batteries employ solid electrolytes, offering numerous advantages.</p>
      
      <h2>How Solid-State Batteries Work</h2>
      <p>Traditional lithium-ion batteries contain a liquid electrolyte solution that allows ions to move between the anode and cathode. Solid-state batteries replace this liquid with a solid material, typically a ceramic or polymer. This fundamental change brings several key benefits.</p>
      
      <h2>Key Advantages</h2>
      <p><strong>Higher Energy Density:</strong> Solid-state batteries can store more energy in the same space, potentially doubling the range of current EVs. This means a vehicle could travel 600-800 miles on a single charge.</p>
      
      <p><strong>Faster Charging:</strong> The solid electrolyte allows for faster ion movement, enabling charging times as short as 10-15 minutes for a full charge.</p>
      
      <p><strong>Improved Safety:</strong> Without flammable liquid electrolytes, solid-state batteries are less prone to fires and thermal runaway events.</p>
      
      <p><strong>Longer Lifespan:</strong> These batteries can withstand more charge cycles before degradation, potentially lasting the lifetime of the vehicle.</p>
      
      <h2>Current Challenges</h2>
      <p>Despite their promise, solid-state batteries face manufacturing challenges. The solid electrolyte can be brittle, making it difficult to maintain contact with electrodes during expansion and contraction. Production costs are also currently higher than traditional batteries.</p>
      
      <h2>Market Timeline</h2>
      <p>Several companies are racing to commercialize solid-state batteries. Toyota plans to introduce them in hybrid vehicles by 2025, with full EV applications by 2027-2028. QuantumScape, a startup backed by Volkswagen, is also making significant progress. Most industry experts predict mass-market adoption by 2030.</p>
      
      <p>Solid-state batteries could revolutionize the EV industry, making electric vehicles more practical, safer, and more appealing to consumers.</p>
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    category: 'Technology',
    tags: ['Battery Tech', 'Innovation', 'Solid-State'],
    image: 'blogs/blogImages/battery-technology-breakthrough-solid-state-batteries-explained.jpg',
    publishedDate: 'Oct 28, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: '5',
    title: 'EV Tax Credits and Incentives: Your Complete Guide for 2025',
    slug: 'ev-tax-credits-and-incentives-your-complete-guide-for-2025',
    excerpt: 'Navigate the complex world of electric vehicle incentives, tax credits, and rebates available in 2025. Find out how much you can save on your next EV purchase.',
    content: `
      <p>Purchasing an electric vehicle can be expensive, but numerous tax credits and incentives can significantly reduce the cost. Understanding these programs is essential for maximizing your savings.</p>
      
      <h2>Federal Tax Credits</h2>
      <p>The federal government offers a tax credit of up to $7,500 for qualifying electric vehicles. This credit is applied directly to your tax liability, meaning it reduces the amount of taxes you owe. The credit amount depends on battery capacity and vehicle weight, with most full EVs qualifying for the full $7,500.</p>
      
      <p>Important eligibility requirements include:
      <ul>
        <li>Vehicle must be purchased new (not leased)</li>
        <li>Battery capacity must be at least 7 kWh</li>
        <li>Vehicle must be used primarily in the United States</li>
        <li>Income limits may apply for certain tax years</li>
      </ul>
      </p>
      
      <h2>State and Local Incentives</h2>
      <p>Many states offer additional incentives on top of federal credits. California provides rebates up to $7,500 for low-income buyers, while Colorado offers $5,000. Some states also provide sales tax exemptions, reduced registration fees, and HOV lane access.</p>
      
      <h2>Utility Company Rebates</h2>
      <p>Electric utility companies often offer rebates for EV purchases and home charger installations. These can range from $500 to $2,000 depending on your location and utility provider. Some utilities also offer special EV charging rates for off-peak hours.</p>
      
      <h2>Charging Infrastructure Credits</h2>
      <p>The federal government provides a 30% tax credit (up to $1,000) for home charging station installation. Many states and utilities offer additional rebates for installing Level 2 home chargers.</p>
      
      <h2>How to Claim Credits</h2>
      <p>Federal tax credits are claimed when filing your annual tax return using IRS Form 8936. Keep all purchase documentation, including the vehicle's VIN and purchase date. State rebates typically require separate applications through state energy offices or environmental agencies.</p>
      
      <p>With proper planning, you can save thousands of dollars on your electric vehicle purchase through these various incentive programs.</p>
    `,
    author: {
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    category: 'Guides',
    tags: ['Tax Credits', 'Incentives', 'Savings', 'Guide'],
    image: 'blogs/blogImages/ev-tax-credits-and-incentives-your-complete-guide-for-2025.jpg',
    publishedDate: 'Oct 25, 2025',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: '6',
    title: 'Electric SUVs: The Best Options for Families in 2025',
    slug: 'electric-suvs-the-best-options-for-families-in-2025',
    excerpt: 'Discover the top electric SUVs that combine spacious interiors, impressive range, and family-friendly features. From affordable options to luxury models.',
    content: `
      <p>Electric SUVs are becoming the vehicle of choice for families looking to go electric. They offer the space, safety, and versatility families need, combined with the benefits of electric powertrains.</p>
      
      <h2>Tesla Model Y</h2>
      <p>The Model Y continues to be a top choice for families, offering up to 330 miles of range, seating for up to 7 passengers, and Tesla's extensive Supercharger network. Its minimalist interior and advanced safety features make it appealing to tech-savvy families. Starting around $48,000, it represents excellent value in the electric SUV market.</p>
      
      <h2>Ford Mustang Mach-E</h2>
      <p>Ford's electric SUV combines performance with practicality. The Mach-E offers up to 312 miles of range and spacious cargo capacity. Its traditional SUV styling appeals to those transitioning from gas-powered vehicles. The Mach-E starts at approximately $43,000 and offers excellent build quality and reliability.</p>
      
      <h2>Hyundai IONIQ 5</h2>
      <p>The IONIQ 5 stands out with its unique design and impressive charging speed. It can charge from 10% to 80% in just 18 minutes with a 350kW charger. The spacious interior and family-friendly features make it an excellent choice. Starting around $41,000, it offers great value with its 10-year battery warranty.</p>
      
      <h2>Volkswagen ID.4</h2>
      <p>The ID.4 provides a comfortable, practical electric SUV experience. With up to 275 miles of range and a roomy interior, it's well-suited for family use. Volkswagen's build quality and three years of free charging at Electrify America stations add to its appeal. Starting at around $38,000, it's one of the more affordable options.</p>
      
      <h2>Rivian R1S</h2>
      <p>For families seeking adventure, the Rivian R1S offers impressive off-road capabilities combined with luxury features. With up to 316 miles of range and seating for 7, it's perfect for large families who love the outdoors. Starting around $78,000, it's positioned in the luxury segment.</p>
      
      <h2>Key Family Considerations</h2>
      <p>When choosing an electric SUV for your family, consider:
      <ul>
        <li>Cargo space for strollers, sports equipment, and groceries</li>
        <li>Seating capacity and configuration</li>
        <li>Safety ratings and features</li>
        <li>Range for daily commutes and road trips</li>
        <li>Charging infrastructure in your area</li>
        <li>Child seat compatibility</li>
      </ul>
      </p>
      
      <p>With so many excellent options available, there's an electric SUV to fit every family's needs and budget.</p>
    `,
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    category: 'Reviews',
    tags: ['SUVs', 'Family', 'Review', '2025'],
    image: 'blogs/blogImages/electric-suvs-the-best-options-for-families-in-2025.jpg',
    publishedDate: 'Oct 22, 2025',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: '7',
    title: 'The Environmental Impact of Electric Vehicles: Myths vs. Reality',
    slug: 'the-environmental-impact-of-electric-vehicles-myths-vs-reality',
    excerpt: 'Separating fact from fiction about EV environmental impact. We examine manufacturing emissions, electricity sources, and the true carbon footprint of electric vehicles.',
    content: `
      <p>Electric vehicles are often touted as the solution to transportation emissions, but questions remain about their true environmental impact. Let's separate the myths from the reality.</p>
      
      <h2>Manufacturing Emissions</h2>
      <p>It's true that manufacturing an electric vehicle produces more emissions than a conventional car, primarily due to battery production. However, studies show that EVs make up for this "carbon debt" within 6-18 months of driving, depending on the electricity grid's carbon intensity. Over a vehicle's lifetime, EVs produce significantly fewer emissions.</p>
      
      <h2>Electricity Source Matters</h2>
      <p>The environmental benefit of EVs depends heavily on how the electricity is generated. In regions with clean energy grids (solar, wind, hydro), EVs produce minimal emissions. Even in areas with coal-heavy grids, EVs still produce fewer emissions than gasoline vehicles due to the efficiency of electric motors.</p>
      
      <h2>Battery Production Concerns</h2>
      <p>Lithium-ion battery production requires mining of materials like lithium, cobalt, and nickel. While this has environmental impacts, the industry is working to improve mining practices and develop more sustainable battery chemistries. Recycling programs are also expanding to recover valuable materials from used batteries.</p>
      
      <h2>Lifecycle Analysis</h2>
      <p>Comprehensive lifecycle studies consistently show that EVs produce 50-70% fewer emissions over their lifetime compared to internal combustion engine vehicles. This includes manufacturing, operation, and end-of-life disposal. As electricity grids become cleaner and battery recycling improves, this advantage will only increase.</p>
      
      <h2>Myth: EVs Just Move Pollution</h2>
      <p>Critics argue that EVs simply move emissions from tailpipes to power plants. While this is partially true, centralized power generation is more efficient and easier to clean up than millions of individual vehicle emissions. Power plants can also be upgraded to cleaner technologies more easily than replacing millions of vehicles.</p>
      
      <h2>The Road Ahead</h2>
      <p>As renewable energy adoption increases and battery technology improves, the environmental benefits of EVs will continue to grow. The transition to electric vehicles is a crucial step toward reducing transportation emissions and combating climate change.</p>
      
      <p>The evidence is clear: electric vehicles offer significant environmental benefits over their gasoline counterparts, and these benefits will only improve as our energy infrastructure becomes cleaner.</p>
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    category: 'News',
    tags: ['Environment', 'Sustainability', 'Carbon Footprint'],
    image: 'blogs/blogImages/the-environmental-impact-of-electric-vehicles-myths-vs-reality.jpg',
    publishedDate: 'Oct 20, 2025',
    readTime: '7 min read',
    featured: false,
  },
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Editor-in-Chief',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    bio: 'Passionate about sustainable transportation with 10+ years of automotive journalism experience.',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Tech Writer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    bio: 'Former automotive engineer turned writer, specializing in EV technology and innovation.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Reviews Editor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    bio: 'Test driver and reviewer with expertise in vehicle performance and user experience.',
  },
  {
    name: 'David Park',
    role: 'Policy Analyst',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    bio: 'Covering EV policy, regulations, and market trends across global markets.',
  },
];

