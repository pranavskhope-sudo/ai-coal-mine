const generate = async () => {
  setGenerating(true);

  try {
    const response = await fetch("/api/generate-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mine,
        data: rows,
        context:
          "Generate an AI-assisted mining and geological report from the supplied operational data."
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Report generation failed");
    }

    setReport(result.report);
    setPage("reports");

  } catch (error) {
    console.error(error);
    alert(
      "AI report generation failed. Please check the Gemini API configuration."
    );
  } finally {
    setGenerating(false);
  }
};