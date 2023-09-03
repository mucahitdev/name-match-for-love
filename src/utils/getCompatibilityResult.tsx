interface CompatibilityResult {
  title: string;
  description: string;
}

const compatibilityTexts: Record<string, CompatibilityResult> = {
  "0-10": {
    title: "Düşük Uyum",
    description:
      "Aradığınız enerji bu ikiliyle pek hissedilmiyor. Ancak her zaman farklı bir yaklaşımla birbirinizi daha iyi tanıma şansınız var.",
  },
  "10-20": {
    title: "Az Uyum",
    description:
      "Bu ikili arasında bazı benzerlikler ve farklar var. Bu farklarla birbirinizi daha iyi anlama şansını yakalayabilirsiniz.",
  },
  "20-30": {
    title: "Orta Altı Uyum",
    description:
      "İkisinin de birbirine verebileceği çok şey var. Belki de bu uyumu artırmanın yolu, birlikte daha fazla vakit geçirmekten geçiyor.",
  },
  "30-40": {
    title: "Orta Uyum",
    description:
      "Bu ikili, birçok ortak noktaya sahip. Ancak bu benzerlikler aynı zamanda bazı küçük anlaşmazlıklara da yol açabilir.",
  },
  "40-50": {
    title: "Orta Üstü Uyum",
    description:
      "Bu ikilinin enerjisi genellikle pozitif. İlerleyen zamanlarda bu enerji, ilişkinin derinleşmesine katkıda bulunabilir.",
  },
  "50-60": {
    title: "İyi Uyum",
    description:
      "Aradığınız enerjik bağlantıyı bu ikiliyle bulabilirsiniz. İlerleyen zamanlarda bu bağ daha da güçlenebilir.",
  },
  "60-70": {
    title: "Çok İyi Uyum",
    description:
      "Bu ikili arasında güçlü bir enerji akışı var. Birlikte vakit geçirdikçe, bu enerji daha da artabilir.",
  },
  "70-80": {
    title: "Harika Uyum",
    description:
      "Bu ikili birlikteyken, etraflarındakilere pozitif enerji yayıyor. İlişkileri sürekli olarak gelişiyor ve derinleşiyor.",
  },
  "80-90": {
    title: "Mükemmel Uyum",
    description:
      "Bu iki isim bir araya geldiğinde, etraflarındakilere büyülü bir enerji yayıyor. İleriye dönük büyük bir potansiyele sahipler.",
  },
  "90-100": {
    title: "Kusursuz Uyum",
    description:
      "Bu ikilinin uyumu adeta kusursuz. Aralarındaki bağlantı, birçok insanın hayal edebileceğinden daha güçlü ve derin.",
  },
};

function getCompatibilityResult(percentage: number): CompatibilityResult {
  if (percentage <= 10) return compatibilityTexts["0-10"];
  if (percentage <= 20) return compatibilityTexts["10-20"];
  if (percentage <= 30) return compatibilityTexts["20-30"];
  if (percentage <= 40) return compatibilityTexts["30-40"];
  if (percentage <= 50) return compatibilityTexts["40-50"];
  if (percentage <= 60) return compatibilityTexts["50-60"];
  if (percentage <= 70) return compatibilityTexts["60-70"];
  if (percentage <= 80) return compatibilityTexts["70-80"];
  if (percentage <= 90) return compatibilityTexts["80-90"];
  if (percentage <= 100) return compatibilityTexts["90-100"];

  throw new Error("Invalid percentage value"); // Geçerli olmayan bir yüzde değeri verilirse hata fırlatılır.
}

export default getCompatibilityResult;
