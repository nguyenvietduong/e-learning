import { useState } from 'react';
import { hangul } from '../../data/hangul';
import { useTranslation } from 'react-i18next';
import { speak } from '../../config/speechUtils';
import { VideoLearnPlayer } from '../../components/VideoLearnPlayer';

export default function HangulChart() {
    const { t } = useTranslation('lessons');

    const [activeTab, setActiveTab] = useState('videoLearn');

    const tabs = [
        { id: 'videoLearn', label: t('tabs.videoLearn') },
        { id: 'simpleVowels', label: t('tabs.simpleVowels') },
        { id: 'complexVowels', label: t('tabs.complexVowels') },
        { id: 'basicConsonants', label: t('tabs.basicConsonants') },
        { id: 'doubleConsonants', label: t('tabs.doubleConsonants') },
    ];

    const myVideos = [
        "https://drive.google.com/file/d/1Agp2Jeblfx96kP9Wi_uFQJT566nLPJav/preview",
        "https://drive.google.com/file/d/1ZZiWhUAjzUfsQw-Od0RWFmIugIk2Mszr/preview",
        "https://drive.google.com/file/d/1X6xS-TVrhqNo0M2szN4wpDo4eaRYZpjQ/preview",
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'videoLearn':
                return <VideoLearnPlayer videoUrls={myVideos} />;
            case 'simpleVowels':
                return renderGrid(hangul.vowels.simple, 'bg-green-100');
            case 'complexVowels':
                return renderGrid(hangul.vowels.complex, 'bg-green-200');
            case 'basicConsonants':
                return renderGrid(hangul.consonants.basic, 'bg-yellow-100');
            case 'doubleConsonants':
                return renderGrid(hangul.consonants.double, 'bg-yellow-200');
            default:
                return null;
        }
    };

    const renderGrid = (items, bg) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {items.map((item, idx) => (
                <div key={idx} className={`p-6 ${bg} rounded text-center flex flex-col items-center`}>
                    <div className="text-3xl font-bold">{item.char}</div>
                    <div className="text-sm mt-1">{item.romanized}</div>
                    <button
                        onClick={() => speak(item.char)}
                        className="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        🔊
                    </button>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[120px] text-center px-4 py-2 rounded border
                        ${activeTab === tab.id
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-blue-600 border-blue-600'}
      `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div>{renderContent()}</div>
        </div>
    );
}