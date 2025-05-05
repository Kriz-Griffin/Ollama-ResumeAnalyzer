import ExpandableSection from "./ExpandableSection";
import ReactMarkdown from 'react-markdown';

const AnalysisSection = ({ ollamaResponse }) => {
    // Function to extract chain of thought
    const extractChainOfThought = (text) => {
        const thinkMatch = text.match(/<think>(.*?)<\/think>/s);
        return thinkMatch ? thinkMatch[1].trim() : '';
    };

    // Function to extract final response
    const extractFinalResponse = (text) => {
        return text.split('</think>')[1]?.trim() || '';
    };

    const chainOfThought = extractChainOfThought(ollamaResponse.response);
    const finalResponse = extractFinalResponse(ollamaResponse.response);

    return (
        <div className="mb-6 space-y-6">
            {/* Technical Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-700">Model Used:</span>
                    <span className="ml-2 text-gray-600">{ollamaResponse.model}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-700">Analysis Time:</span>
                    <span className="ml-2 text-gray-600">
                        {new Date().toLocaleTimeString()}
                    </span>
                </div>
            </div>

            {/* Chain of Thought */}
            <ExpandableSection
                title="Model's reasoning"
                content={chainOfThought}
            />

            {/* Final Response */}
            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Analysis Results</h3>
                <ReactMarkdown>{finalResponse}</ReactMarkdown>
            </div>
        </div>
    );
};

export default AnalysisSection;