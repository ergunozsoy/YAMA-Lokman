function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");

  sections.forEach((section) => {
    section.classList.add("hidden");
  });

  const selectedSection = document.getElementById(sectionId);

  if (selectedSection) {
    selectedSection.classList.remove("hidden");
    selectedSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getValue(id) {
  const element = document.getElementById(id);
  return element && element.value.trim() ? element.value.trim() : "Belirtilmedi.";
}

function generateSummary() {
  const mainComplaint = getValue("mainComplaint");
  const startTime = getValue("startTime");
  const development = getValue("development");
  const symptoms = getValue("symptoms");
  const conditions = getValue("conditions");
  const medications = getValue("medications");
  const recentEvents = getValue("recentEvents");

  const summary = `DOKTORA SUNULACAK SAĞLIK ÖYKÜSÜ

Ana şikâyet:
${mainComplaint}

Başlangıç zamanı:
${startTime}

Şikâyetin gelişimi:
${development}

Eşlik eden belirtiler:
${symptoms}

Bilinen hastalıklar:
${conditions}

Kullanılan ilaçlar ve takviyeler:
${medications}

Son olaylar:
${recentEvents}

Güvenlik notu:
Bu metin kullanıcı tarafından girilen bilgileri düzenlemek için oluşturulmuştur. Teşhis, tedavi veya ilaç önerisi değildir. Acil veya ciddi belirtilerde hekime ya da acil sağlık hizmetlerine başvurulmalıdır.`;

  document.getElementById("summaryText").textContent = summary;
  document.getElementById("summaryBox").classList.remove("hidden");
}

function copySummary() {
  const summaryText = document.getElementById("summaryText").textContent;

  if (!summaryText) {
    alert("Kopyalanacak metin bulunamadı.");
    return;
  }

  navigator.clipboard
    .writeText(summaryText)
    .then(() => {
      alert("Sağlık öyküsü metni kopyalandı.");
    })
    .catch(() => {
      alert("Metin kopyalanamadı. Lütfen elle seçip kopyalayın.");
    });
}
