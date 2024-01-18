
import MainPage from '@/components/mainPage/MainPage'

const metatagData = {
  Finance: {
    description: "Master Your Finances with Expert Insights. Dive into our collection of finance blogs for valuable tips on saving, investing, managing debt, and building wealth. Achieve financial freedom with expert guidance and practical advice.",
    keywords: ["g finance", "finance", "ally finance", "msn money", "financial advisor", "financial education", "googlefinance", "money", "retirement planning", "debt management", "how to invest in stocks", "best ways to save money", "how to get out of debt", "how to plan for retirement"],
    image: "/finance.jpg"
  },
  Coding: {
    description: "Unleash Your Inner Code Master: Dive into a world of coding blogs brimming with practical tutorials, insightful guides, and cutting-edge trends. Explore diverse programming languages, master new skills, and build amazing projects with our curated collection of coding blogs.",
    keywords: ["visual studio code", "visual code", "coding", "visual studio", "vscode", "coding bootcamp", "github copilot", "code hs", "programming", "web development", "app development", "python", "javascript", "java", "how to learn to code", "best programming languages for beginners", "how to build a website", "how to code an app", "python tutorials for beginners", "how to get a job in coding"],
    image: "/coding.jpg"
  },
  Travel: {
    description: "Unforgettable Travel Adventures Await! Discover inspiring travel blogs from around the world with insider tips, captivating stories, and stunning photos. Explore hidden gems and plan your next trip with our curated collection of travel blogs.",
    keywords: ["flights", "cheap flights", "expedia flights", "expedia airline tickets", "expedia airlines", "skyscanners", "travel", "vacation", "trip", "best places to travel in the world", "how to plan a solo trip", "cheap travel tips", "unique travel experiences", "hidden gems in europe", "budget travel", "top travel blogs to follow"],
    image: "/travel.jpg"

  },
  Food: {
    description: "Embark on a Culinary Adventure: Discover a world of deliciousness with our collection of inspiring food blogs. Explore diverse cuisines, gather mouthwatering recipes, and learn expert cooking tips. Fuel your passion for food and create unforgettable culinary experiences.",
    keywords: ["food", "olive garden", "chinese food near me", "breakfast", "fast food near me", "chilis", "recipe", "cooking", "baking", "healthy eating", "dessert", "meal prep", "vegan", "easy dinner recipes", "healthy meal prep ideas", "best vegan desserts", "keto recipes for beginners", "how to make sourdough bread", "authentic Italian pasta recipes", "gluten-free cookies that taste amazing", "one-pan meals for busy weeknights"],
    image: "/food.jpg"
  },
  Technology: {
    description: "Stay Ahead of the Curve: Dive into the Latest Tech Trends with Our Top Technology Blogs. Explore groundbreaking innovations, insightful analyses, and expert opinions on the future of technology. Stay informed and inspired with our curated collection of tech blogs.",
    keywords: ["creative cloud", "augmented reality", "technology", "tech", "adobe creative cloud", "virtual reality", "vr virtual reality", "computer numerical control", "gadget", "AI", "cybersecurity", "software", "smartphone", "internet", "best tech gadgets to buy", "how to use artificial intelligence", "cybersecurity tips for businesses", "top software development tools", "how to choose the right smartphone", "tips for a faster internet connection", "how to create a mobile app", "benefits of cloud computing"],
    image: "/style.jpg"

  },
  Fashion: {
    description: "Unleash Your Inner Fashionista: Discover a world of inspiring fashion blogs bursting with stunning visuals, trending styles, and expert styling tips. Elevate your look and embrace your unique fashion sense with our curated collection of fashion blogs.",
    keywords: ["mens wear house", "clothing stores near me", "met gala 2023", "fashion", "women's clothing", "shein dresses", "shein clothing", "style", "trends", "trends", "outfit", "clothing", "shoes", "beauty", "best fashion trends for fall", "how to create a capsule wardrobe", "affordable fashion finds on a budget", "where to buy sustainable clothing", "how to style a maxi dress", "latest trends in men's fashion", "plus-size fashion tips for beginners", "how to choose the right accessories"],
    image: "/fashion.jpg"
  }

}
export const generateMetadata = ({ searchParams }) => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?categoryFilter=${searchParams.categoryFilter}`
      );

      if (response.ok) {
        let result = await response.json();
        let data = result.data
        return {
          title: `BloggersGround - ${searchParams.categoryFilter}`,
          description: `${metatagData[searchParams.categoryFilter]["description"]}`,
          category: searchParams.categoryFilter,
          keywords: `${metatagData[searchParams.categoryFilter]["keywords"]}`,
          openGraph: {
            title: `BloggersGround - ${searchParams.categoryFilter}`,
            description: `${metatagData[searchParams.categoryFilter]["description"]}`,
            url: `${process.env.DOMAIN}blog/getallblogs?categoryFilter=${searchParams.categoryFilter}`,
            siteName: "bloggersGround",
            locale: "en_US",
            images: [
              {
                url: `${metatagData[searchParams.categoryFilter]["image"]}`,
                width: 1200,
                height: 628, // Facebook share image size
              },
              {
                url: `${metatagData[searchParams.categoryFilter]["image"]}`,
                width: 1080,
                height: 1080, // Instagram square image size
              },
              {
                url: `${metatagData[searchParams.categoryFilter]["image"]}`,
                width: 600,
                height: 315, // Twitter share image size
              },
              {
                url: `${metatagData[searchParams.categoryFilter]["image"]}`,
                width: 800,
                height: 800, // WhatsApp share image size
              },

            ],
          },
          twitter: {
            card: 'summary_large_image',
            title: `BloggersGround - ${searchParams.categoryFilter}`,
            description: `${metatagData[searchParams.categoryFilter]["description"]}`,
            creator: 'bloggersGround',
            creatorId: '1467726470533754880',
            images: [`${metatagData[searchParams.categoryFilter]["image"]}`],
          },
          alternates: {
            canonical: `${process.env.DOMAIN}blog/getallblogs?categoryFilter=${searchParams.categoryFilter}`,
          },
        };
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return fetchData();

};

export default function Page() {
  return (
    <div>
      <MainPage />
    </div>
  )
}


