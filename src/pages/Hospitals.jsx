import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hospitals = [
  {
    name: "Charité - Universitätsmedizin Berlin",
    location: "Berlin",
    specialties: ["Neurology", "Cardiology", "Oncology"],
    description: "One of Europe's largest university hospitals, known for its excellence in research and patient care."
  },
  {
    name: "University Hospital Heidelberg",
    location: "Heidelberg",
    specialties: ["Cancer Treatment", "Cardiovascular Diseases", "Neurosciences"],
    description: "A center of excellence for rare and complex diseases, offering innovative treatments."
  },
  {
    name: "Asklepios Klinik Barmbek",
    location: "Hamburg",
    specialties: ["Orthopedics", "Urology", "General Surgery"],
    description: "Modern hospital with a focus on minimally invasive surgical techniques and rapid recovery programs."
  },
  {
    name: "University Hospital of Munich (LMU)",
    location: "Munich",
    specialties: ["Pediatrics", "Transplantation", "Hematology and Oncology"],
    description: "Renowned for its interdisciplinary approach and cutting-edge medical research."
  },
  {
    name: "Helios Hospital Berlin-Buch",
    location: "Berlin",
    specialties: ["Cardiology", "Oncology", "Neurosurgery"],
    description: "One of the largest and most modern hospitals in Europe, offering comprehensive medical care."
  }
];

const Hospitals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Top Hospitals in Germany</h1>
      <p className="text-xl mb-8">Germany is home to some of the world's most advanced and well-equipped hospitals. Here are some of the top medical institutions known for their excellence in various specialties:</p>
      
      <div className="grid grid-cols-1 gap-6">
        {hospitals.map((hospital, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{hospital.name}</CardTitle>
              <CardDescription>{hospital.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{hospital.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Key Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary">{specialty}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
