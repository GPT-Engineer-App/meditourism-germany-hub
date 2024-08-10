import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const procedures = [
  {
    name: "Orthopedic Surgery",
    description: "Joint replacements, spinal surgeries, and sports medicine procedures.",
    popularTreatments: ["Total Knee Replacement", "Hip Replacement", "Spinal Fusion"]
  },
  {
    name: "Cancer Treatment",
    description: "Advanced oncology care including chemotherapy, radiation therapy, and immunotherapy.",
    popularTreatments: ["Targeted Therapy", "Proton Therapy", "CAR T-cell Therapy"]
  },
  {
    name: "Cardiovascular Procedures",
    description: "State-of-the-art heart surgeries and minimally invasive cardiac treatments.",
    popularTreatments: ["Coronary Artery Bypass", "Heart Valve Repair", "Angioplasty"]
  },
  {
    name: "Neurosurgery",
    description: "Complex brain and spine surgeries using cutting-edge techniques.",
    popularTreatments: ["Brain Tumor Removal", "Deep Brain Stimulation", "Spine Surgery"]
  },
  {
    name: "Fertility Treatments",
    description: "Advanced reproductive technologies and fertility preservation options.",
    popularTreatments: ["In Vitro Fertilization (IVF)", "Egg Freezing", "Intrauterine Insemination (IUI)"]
  },
  {
    name: "Plastic and Reconstructive Surgery",
    description: "Cosmetic and reconstructive procedures performed by expert surgeons.",
    popularTreatments: ["Breast Reconstruction", "Facial Rejuvenation", "Body Contouring"]
  }
];

const Procedures = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Medical Procedures in Germany</h1>
      <p className="text-xl mb-8">Germany offers a wide range of medical procedures performed by world-renowned specialists using the latest technologies. Here are some of the most sought-after treatments:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {procedures.map((procedure, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{procedure.name}</CardTitle>
              <CardDescription>{procedure.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Popular Treatments:</h4>
              <ul className="list-disc list-inside">
                {procedure.popularTreatments.map((treatment, idx) => (
                  <li key={idx}>{treatment}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Procedures;
