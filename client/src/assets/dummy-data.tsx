import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag and drop assets. AI auto-optimizes formats and sizes for ads.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Generate high-quality ad creatives instantly with AI - no setup, no delays, just results in seconds.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'AI-powered video synthesis for fast, high-impact ad creation..'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '₹499',
        desc: 'Best for early-stage startups.',
        credits: 'One-time',
        features: [
            'AI ad copy & creative generation',
            'Social media–ready ad formats',
            '1 revision per ad',
            'Basic campaign guidance',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '₹1,499',
        desc: 'Ideal for growing brands running multiple ad campaigns',
        credits: '80',
        features: [
            'Everything in Starter',
            'Multiple ad variations per campaign',
            'Platform-optimized creatives (Meta, Google, Reels)',
            'No Watermark',
            'Priority email support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '₹3,999',
        desc: 'For brands ready to scale fast.',
        credits: '300',
        features: [
            'Everything in Pro',
            'High-volume ad generation',
            'Brand voice & style consistency',
            'Multi-platform export (image & video)',
            'Unlimited revisions within credits',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'What are credits?',
        answer: 'Credits represent your allocated AI usage and are applied whenever ads are generated on the platform.'
    },
    {
        question: 'How are credits calculated?',
        answer: 'Credit consumption is determined by the AI processing required, including prompts, generated copy, and creative outputs. More complex workflows consume additional credits.'
    },
    {
        question: 'What happens when my credits are exhausted?',
        answer: 'You may seamlessly upgrade your plan or purchase additional credits to maintain uninterrupted access.'
    },
    {
        question: 'Do credits expire?',
        answer: 'Credits are one-time allocations and remain valid until fully utilized.'
    },
    {
        question: 'Why do some ads consume more credits?',
        answer: 'Ad complexity—such as longer copy, multiple variants, images, or video generation—requires greater AI resources and therefore higher credit usage.'
    },{
        question: 'Are credits shared across features?',
        answer: 'Yes. All platform capabilities, including ad copy, creative assets, and exports, draw from a unified credit balance.'
     },
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];