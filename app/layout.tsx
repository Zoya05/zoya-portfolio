import type { Metadata, Viewport } from 'next';
import './globals.css';
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };
export const metadata: Metadata = {
 title: 'Shaik Zoya Mehek | AI/ML Engineer & Data Analyst',
 description: 'Portfolio of Shaik Zoya Mehek — AI/ML Engineer and Data Analyst, featuring machine learning, deep learning, NLP and analytics projects.',
 applicationName: 'Shaik Zoya Mehek Portfolio',
 keywords: ['Shaik Zoya Mehek','AI/ML Engineer','Data Analyst','Python','TensorFlow','Machine Learning','Deep Learning','NLP'],
 openGraph: { title: 'Shaik Zoya Mehek | AI/ML Engineer & Data Analyst', description: 'Explore projects, skills and experience across AI, machine learning and data analytics.', type: 'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
