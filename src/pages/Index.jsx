import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">Medical Tourism in Germany</h1>
          <p className="text-xl text-gray-600 mt-2">World-class healthcare in the heart of Europe</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Germany for Medical Treatment?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cutting-edge Technology", description: "Access to the latest medical innovations and equipment" },
              { title: "Highly Skilled Doctors", description: "Internationally renowned medical professionals" },
              { title: "Short Waiting Times", description: "Quick access to treatments and procedures" },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Popular Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Orthopedic Surgery", "Cancer Treatment", "Cardiovascular Procedures", "Neurosurgery"].map((procedure, index) => (
              <Button key={index} variant="outline" className="text-lg py-6">
                {procedure}
              </Button>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/procedures">
              <Button>View All Procedures</Button>
            </Link>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-4">Start Your Medical Journey</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">Ready to explore your options for medical treatment in Germany? Our team is here to help you every step of the way.</p>
              <Link to="/plan-your-trip">
                <Button size="lg">Plan Your Trip</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
