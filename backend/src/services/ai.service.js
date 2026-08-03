
import pdf from "pdf-parse-new";
import axios from "axios";

export const ResumeAnalyze = async (data, files, description) => {
    try {
        const designData = []
        for (const rec of data) {
            designData.push({
                fileID: rec.id,
                url: rec.files.url,
            });
        }
        // console.log(designData)

        for (let i = 0; i < files.length; i++) {
            const content = await pdf(files[0].buffer);
            // console.log(data.text)
            designData[i].content = content.text;
        }

        const payload = {
            jobDescription: description,
            resume: designData
        }


        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openrouter/free",
                messages: [
                    {
                        role: "system",
                        content: `
You are an ATS Resume Analyzer.

You will receive:
1. A job description.
2. An array of resumes.

Compare every resume with the job description.

Return ONLY the single best matching resume.

Return ONLY valid JSON.

Example:
{
  "fileID": ,
  "url": '',
}

Do not include markdown or any explanation outside the JSON.
        `,
                    },
                    {
                        role: "user",
                        content: JSON.stringify(payload),
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const bestResume = JSON.parse(
            response.data.choices[0].message.content
        );
        console.log('Best Resume....',bestResume);
        return bestResume


    } catch (err) {
        return err
    }
} 