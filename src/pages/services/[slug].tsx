import { useRouter } from 'next/router';
import servicesData from '../../data/service.json';
import { getLayout } from '@/components/layouts/layout';
import Image from 'next/image';
import Accordion from '@/components/common/accordion';
import Section from '@/components/common/seciton';
import Card from '@/components/common/card';

const ServiceDetailPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const service = servicesData.find(s => s.slug === slug); // Find service by slug
    
    return (
        <div className="max-w-6xl m-auto my-24">
            <div className="relative h-72 md:h-96 overflow-hidden">
                <div className="overflow-hidden">
                    <Image
                        src={service?.image || ""}
                        alt={""}
                        className="absolute inset-0 w-full h-full object-cover rounded-b-lg animate-infinite-zoom"
                        width={1000}
                        height={100}
                        quality={100}
                    />
                </div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-bold !font-gemsbuck  mb-4 text-white">
                        {service?.title}
                    </h1>
                </div>
            </div>
            <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8  ">
                <div className="lg:col-span-8 col-span-12">
                    <div className="py-4">
                        <h2 className="font-semibold mb-4 text-3xl font-gemsbuck">{service?.section1?.title}</h2>
                        <p className='text-lg font-rodin '>
                            {service?.section1?.content}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-8 overflow-hidden max-md:grid-cols-1">
                        {service?.images.map((img, idx) => (
                            <Image key={idx} src={img} alt={`Image ${idx + 1}`} width={400} height={100} quality={100} className="rounded-lg shadow-lg overflow-hidden md:h-72 object-cover" />
                        ))}
                    </div>
                    {/* Long Content Section 2 */}
                    <div className="py-4">
                        <h2 className="font-semibold mb-4 text-3xl font-gemsbuck">{service?.section2?.title}</h2>
                        <p className='text-lg font-rodin '>
                            {service?.section2?.content}
                        </p>
                    </div>

                    <div className="faq-section mt-10">
                        <h2 className="text-3xl font-semibold  font-gemsbuck mb-8 ">Frequently Asked Questions</h2>
                        <div>
                            <Accordion data={service?.faq} />
                        </div>
                    </div>
                </div>

                {/* Right side content (4 columns on large screens) */}
                <div className="lg:col-span-4 col-span-12 space-y-8">
                    {/* Working Hours Section */}
                    <div className=" mt-5">
                        <h2 className="font-semibold mb-4 text-3xl font-gemsbuck">Working Hours</h2>
                        <p>{service?.workingHours.days}: {service?.workingHours.time}</p>
                    </div>


                    {/* Related Services */}
                    <div className="related-services">
                        <h2 className="font-semibold mb-4 text-3xl font-gemsbuck">Related Services</h2>
                        <div className="space-y-8 ">
                            {service?.relatedServices.map((related, idx) => (
                                <Card
                                    key={related.slug}
                                    variant="left"
                                    title={related.title}
                                    imageUrl={related.image}
                                    buttonLink={`/services/${related.slug}`}
                                    
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;

ServiceDetailPage.getLayout = getLayout;
