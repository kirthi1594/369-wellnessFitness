import { getLayout } from '@/components/layouts/layout';
import React from 'react'
import servicesData from '../../data/service.json';
import CenteredTitle from '@/components/common/title-2';
import Card from '@/components/common/card';
import Container from '@/components/common/container';


const Service = () => {
    return (
        <div>
            <Container className={"!mt-28"}>
                <CenteredTitle title={"Master the Art of Wellness"} subtitle={"Unlock the balance between mind, body, and strength for a healthier, fitter you."} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10 "
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false">
                    {servicesData?.map((v, i) => (
                        <Card
                            variant="centered"
                            title={v?.title}
                            description={v?.content}
                            buttonText="View more"
                            buttonLink={`/services/${v?.slug}`}
                            imageUrl={v?.image}
                        />
                    ))}
                </div>
            </Container>
        </div >
    )
}

export default Service

Service.getLayout = getLayout;