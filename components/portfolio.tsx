import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <div className="container pb-14">
                    <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
                 </div>

            <div className='container grid grid-cols-1 md:grid-cols-2 gap-20'>
                 
                <div className='md:col-span-1'>
                    <Image src="/Facebook-Ads-Performance-portfolio.png" alt="img" width={1000} height={1000} className='w-full h-[450px] md:h-[600px] lg:h-[700px] object-contain' />
                </div>
                <div className='md:col-span-1 h-full flex flex-col items-start justify-center'>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold leading-normal'>Facebook Ads Case Study</h3>
                    <p className='text-base md:text-[17px] font-medium leading-normal  py-4'><strong>Client Overview </strong><br />
                        The client started a car parts selling online business and wanted to generate consistent website purchases through Facebook Ads while keeping ad spend controlled and performance stable.
                    </p>
                    <p className='text-base md:text-[17px] font-medium leading-normal'><strong>Challenge :</strong> <br />
                        The main challenge was to reach to the most potential customer purchase conversions with efficiency while maintaining the sales flow and delivery across multiple campaigns.</p>
                    <p className='text-base md:text-[17px] font-medium leading-normal py-4'><strong>Solution / Strategy :</strong> <br />
                        I structured and optimized Facebook ad campaigns with proper Funnel strategy. I refined retargeting, used proper budgeting and content strategy, and monitored delivery closely to control frequency and maintain stable performance.</p>
                    <p className='text-base md:text-[17px] font-medium leading-normal'><strong>Conclusion :</strong> <br />
                        This project shows how a well-optimized Facebook Ads retargeting strategy can deliver consistent sales without wasting budget. The client achieved stable performance, controlled costs, and reliable purchase results.</p>
                </div>
            </div>

             <div className='container grid grid-cols-1 md:grid-cols-2 gap-20 py-8 md:py-10 lg:py-14'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/TikTok-Ads-1.png" alt="img" width={1000} height={1000} className='w-full h-[450px] md:h-[600px] lg:h-[700px] object-contain' />
                </div>
                <div className='order-2 md:order-1 md:col-span-1 h-full flex flex-col items-start justify-center'>
                     <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold leading-normal'>Tiktok Ads Case Study </h3>
                    <p className='text-base md:text-[17px] font-medium leading-normal  py-4'><strong>Client Overview :</strong><br />
                        The client is a supply-based e-commerce business selling physical products online. The objective was to generate consistent purchases through TikTok Ads while maintaining a profitable return on ad spend with a controlled budget.
                    </p>
                    <p className='text-base md:text-[17px] font-medium leading-normal'><strong>Challenge :</strong> <br />
                        The main challenge was to drive sales profitably without increasing cost per order. The client needed steady conversions, controlled spending, and positive ROI while running the campaign over a longer period.</p>
                    <p className='text-base md:text-[17px] font-medium leading-normal py-4'><strong>Strategy & Execution :</strong> <br />
                        I launched a conversion-optimized TikTok Ads campaign focused on purchases. TikTok-native video creatives were used to align with user behavior and improve engagement. I closely monitored delivery, optimized budget pacing, and allowed the algorithm to stabilize to ensure consistent performance and cost efficiency.</p>
                    <p className='text-base md:text-[17px] font-medium leading-normal'><strong>Conclusion :</strong> <br />
                        This case study highlights how a well-optimized TikTok Ads strategy can generate profitable sales for a supply-based e-commerce business, even with a modest budget. The client achieved stable conversions, controlled costs, and a healthy ROI.</p>
                </div>
            </div>

             <div className='container grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div className='md:col-span-1'>
                    <Image src="/sce-Performance-portfolio-3624h.png" alt="img" width={1000} height={1000} className='w-full h-[450px] md:h-[600px] lg:h-[800px] object-contain' />
                </div>
                <div className='md:col-span-1 h-full flex flex-col items-start justify-center'>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold leading-normal'>Monthly SEO Case Study </h3>
                    <p className='text-base md:text-[17px] font-medium leading-normal  py-4'><strong>Client Overview :</strong><br />
                        This monthly project focused on improving the overall visibility of a service-based website that needed steady growth across multiple regions. The site had good potential, but its keyword reach, GEO performance, and AI-search presence were not strong enough to support long-term success.
                    </p>
                    <p className='text-base md:text-[17px] font-medium leading-normal'><strong>Challenge :</strong> <br />
                        The website struggled with limited keyword coverage, weak location targeting, and inconsistent international traffic. It also had crawling and indexing issues, and several pages required better structure to perform well across traditional and AI-driven search.</p>
                    <p className='text-base md:text-[17px] font-medium leading-normal py-4'><strong>Solution / Strategy :</strong> <br />
                        I optimized important pages with improved meta tags, clearer headings, internal linking, and more accurate keyword placement. Technical fixes helped boost crawlability, while AEO-friendly content and structured data made the site easier for AI tools to understand. </p>
                    <p className='text-base md:text-[17px] font-medium leading-normal'><strong>Conclusion :</strong> <br />
                        The website now performs more consistently, shows stable month-to-month growth, and has a stronger foundation for expanding its international reach.</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio