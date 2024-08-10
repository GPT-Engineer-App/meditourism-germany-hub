import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PlanningYourTrip = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Planning Your Medical Trip to Germany</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Steps to Plan Your Medical Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Research and choose your medical procedure</li>
            <li>Select a hospital or clinic</li>
            <li>Contact the international patient office</li>
            <li>Gather and send your medical records</li>
            <li>Receive a treatment plan and cost estimate</li>
            <li>Arrange your travel and accommodation</li>
            <li>Apply for a medical visa (if required)</li>
            <li>Prepare for your trip and treatment</li>
          </ol>
        </CardContent>
      </Card>
      
      <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do I need a visa to receive medical treatment in Germany?</AccordionTrigger>
          <AccordionContent>
            Depending on your nationality, you may need a medical treatment visa. EU citizens typically don't need a visa. Non-EU citizens should check with the German embassy in their country for specific requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I choose the right hospital or doctor?</AccordionTrigger>
          <AccordionContent>
            Research hospitals specializing in your required treatment, check their international patient services, and look for doctors with experience in your specific condition. Many German hospitals have English-speaking staff to assist international patients.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What about language barriers?</AccordionTrigger>
          <AccordionContent>
            Many German hospitals have international patient departments with English-speaking staff. Some also offer interpreter services. It's best to confirm language assistance when making your arrangements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I estimate the costs of my treatment?</AccordionTrigger>
          <AccordionContent>
            Contact the hospital's international patient office with your medical records. They can provide a cost estimate for your treatment. Remember to factor in additional costs like accommodation, travel, and potential follow-up care.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PlanningYourTrip;
