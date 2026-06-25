/**
 * Simulated Email Service for PBD Group Real Estate Website
 * Since this is a static client-side web application, sending emails directly
 * from the client is insecure (exposes API keys) and often blocked by CORS.
 * 
 * This service simulates the network call, logs the captured lead to the console
 * with styling for visibility, and stores the lead details in local storage
 * under the key 'pbd_captured_leads' for testing, validation, and analytics.
 */

export const sendInquiryEmail = async (data) => {
  // Validate basic required fields
  if (!data.name || !data.phone) {
    throw new Error("Missing required fields: name and phone are mandatory.");
  }

  // Simulate network latency (between 800ms and 1500ms)
  const latency = 800 + Math.random() * 700;
  await new Promise((resolve) => setTimeout(resolve, latency));

  // Try to parse existing leads from localStorage
  let savedLeads = [];
  try {
    const existing = localStorage.getItem('pbd_captured_leads');
    if (existing) {
      savedLeads = JSON.parse(existing);
    }
  } catch (err) {
    console.error("Failed to parse existing leads from localStorage:", err);
  }

  // Create lead record with timestamp
  const newLead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    timestamp: new Date().toISOString(),
    ...data
  };

  // Add to saved list
  savedLeads.push(newLead);
  try {
    localStorage.setItem('pbd_captured_leads', JSON.stringify(savedLeads));
  } catch (err) {
    console.error("Failed to save lead to localStorage:", err);
  }

  // Log the lead details in a highly visible formatted console block
  console.group("%c Real Estate Premium - Lead Captured ", "background: #2b6cb0; color: white; font-size: 12px; font-weight: bold; padding: 4px; border-radius: 3px;");
  console.log(`%cName:%c ${newLead.name}`, "font-weight: bold;", "");
  console.log(`%cPhone:%c ${newLead.phone}`, "font-weight: bold;", "");
  if (newLead.email) {
    console.log(`%cEmail:%c ${newLead.email}`, "font-weight: bold;", "");
  }
  console.log(`%cProject:%c ${newLead.projectTitle}`, "font-weight: bold;", "");
  if (newLead.budget) {
    console.log(`%cBudget:%c ${newLead.budget}`, "font-weight: bold;", "");
  }
  if (newLead.message) {
    console.log(`%cMessage:%c ${newLead.message}`, "font-weight: bold;", "");
  }
  console.log(`%cTimestamp:%c ${newLead.timestamp}`, "font-weight: bold;", "");
  console.log("%c(Resend simulation completed successfully)", "color: #2f855a; font-style: italic;");
  console.groupEnd();

  return {
    success: true,
    message: "Inquiry registered successfully.",
    leadId: newLead.id
  };
};
