export const enquiryEmailRouting: Record<string, string> = {
  "DFI / Investment": "dfi@trippenergy.com",
  "School Partnership": "schools@trippenergy.com",
  "Technology / Supply": "partners@trippenergy.com",
  "Academic Partnership": "research@trippenergy.com",
  "Media / Press": "media@trippenergy.com",
  Enquiries: "info@trippenergy.com",
};

export function routeForEnquiry(enquiryType: string): string {
  return enquiryEmailRouting[enquiryType] ?? "info@trippenergy.com";
}
