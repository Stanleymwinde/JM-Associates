// app/news/[slug]/page.tsx

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { JSX } from "react";

// Static articles mapped by slug
const articles: Record<string, { title: string; content: JSX.Element }> = {
  "a-digital-prescription-for-the-pharma": {
    title: "A Digital Prescription for the Pharma Industry",
    content: (
      <VStack gap={4} align="start">
        <Text>
          The pharmaceutical industry is undergoing a major transformation
          fueled by digital technologies. While healthcare providers have
          adopted tools like electronic medical records, pharma companies are
          slower in embracing digital innovation.
        </Text>

        <Text>
          <strong>Digital Transformation in Pharma:</strong> Digital tools and
          real-world data (RWD) are revolutionizing drug development,
          manufacturing, and commercialization. RWD, in particular, is crucial
          for demonstrating drug effectiveness beyond clinical trials and
          influencing how drugs are reimbursed.
        </Text>

        <Text>
          <strong>Challenges:</strong> Many pharma companies start multiple
          digital projects without an overarching strategy. One global company
          had over 200 digital projects and 2,000 websites with little
          coordination—leading to inefficiencies.
        </Text>

        <Text>
          <strong>Strategic Integration:</strong> To get real value from digital
          tools, pharma companies must integrate their data, analytics, and
          workflows across internal systems and external partners.
        </Text>

        <Text>
          <strong>Real-World Data Examples:</strong> Bayer used RWD to address
          concerns about side effects, helping with drug approval and
          reimbursement. Top pharma companies could gain up to $1 billion by
          effectively using such data.
        </Text>

        <Text>
          <strong>Partnerships and Investments:</strong> Collaborations like
          Novartis and Walgreens, and investments in digital startups, show how
          pharma can expand its digital capabilities.
        </Text>

        <Text fontWeight="bold">
          Conclusion: Pharma companies must embrace a strategic, integrated
          approach to digital transformation to stay competitive and deliver
          better outcomes.
        </Text>
      </VStack>
    ),
  },


"retail-banks-wake-up-to-digital-lending": {
  title: "Retail Banks Wake Up to Digital Lending",
  content: (
    <VStack gap={4} align="start">
      <Text>
        Retail banks have digitized many services like checking balances and
        mobile check deposits, but lending has been left behind. Surprisingly,
        only about 7% of lending products are fully digital end-to-end even
        though lending accounts for over a third of a bank’s revenue.
      </Text>

      <Text>
        Digital-native fintechs like OnDeck and CommonBond are disrupting the
        market by offering fast, streamlined loan processes with modern tools
        and non-traditional data for credit scoring. Their intuitive platforms
        and rapid approval times are especially attractive to digital-first
        customers.
      </Text>

      <Text>
        Traditional banks often fail because of siloed digital initiatives,
        outdated infrastructure, and compliance hurdles. Some institutions have
        hundreds of scattered digital projects and websites that aren't
        connected by a clear strategy.
      </Text>

      <Text>
        To compete, banks must fully digitize the lending lifecycle, create
        unified user experiences, and make smart use of customer data. With the
        right approach, they can combine their scale and trust with the speed
        and convenience of fintechs.
      </Text>

      <Text fontWeight="bold">
        Conclusion: Digital lending isn’t just an upgrade—it’s a survival
        strategy for retail banks in the modern era.
      </Text>
    </VStack>
  ),
},


   "seven-weeks-working-pro-bono": {
    title: "Seven Weeks Working ‘Pro Bono’",
    content: (
      <VStack gap={4} align="start">
        <Text>
          The Experience: Engaging in a seven-week pro bono project with a charity offers professionals a unique opportunity to apply their skills in a new context. This experience not only benefits the charity but also provides personal and professional growth for the individual involved.
        </Text>
        <Text>
          These pro bono efforts helped bridge critical gaps in technology,
          operations, and strategy for nonprofit organizations.Many organizations overlook the wealth of ideas and innovation that can come from their own employees. 
          Encouraging staff to contribute ideas can lead to significant improvements and growth.
          By tapping into the diverse perspectives of employees, organizations can foster a culture of innovation, leading to the development of new products, services, and market opportunities.
        </Text>
        <Text fontWeight="bold">
          Conclusion: Giving back through your skills can be life-changing—for
          both you and the organization.
        </Text>
      </VStack>
    ),
  },
  
};

const Page = ({ params }: { params: { slug: string } }) => {
  const article = articles[params.slug];

  if (!article) {
    notFound(); // Show 404 if article not found
  }

  return (
    <Box maxW="4xl" mx="auto" py={10} px={4}>
      <Heading as="h1" fontSize="3xl" mb={6}>
        {article.title}
      </Heading>
      {article.content}
    </Box>
  );
};

export default Page;

