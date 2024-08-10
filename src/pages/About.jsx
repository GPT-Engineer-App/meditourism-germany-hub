import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Medical Tourism in Germany</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Why Germany?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Germany has become a leading destination for medical tourism, offering a perfect blend of cutting-edge medical technology, world-renowned medical professionals, and a rich cultural experience. With its stringent quality standards and patient-centered approach, Germany attracts patients from around the globe seeking top-tier medical care.</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Key Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>State-of-the-art medical facilities</li>
              <li>Highly qualified and experienced doctors</li>
              <li>Shorter waiting times compared to many countries</li>
              <li>Strict hygiene and safety standards</li>
              <li>Comprehensive care from diagnosis to rehabilitation</li>
              <li>Often more affordable than US healthcare for similar quality</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Treatments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Orthopedic surgeries</li>
              <li>Cancer treatments</li>
              <li>Cardiovascular procedures</li>
              <li>Neurosurgery</li>
              <li>Fertility treatments</li>
              <li>Dental procedures</li>
              <li>Aesthetic and reconstructive surgeries</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Our mission is to provide comprehensive, up-to-date information about medical tourism in Germany. We aim to help international patients make informed decisions about their healthcare options, connect them with top medical facilities, and guide them through the process of planning their medical journey to Germany.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
