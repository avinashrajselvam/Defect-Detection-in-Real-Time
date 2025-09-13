
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import InfoCard from './components/InfoCard';
import { KEY_FEATURES, BENEFITS, USE_CASES, TECH_SPECS, VERSION_INFO } from './constants';
import type { CardItem } from './types';
import AIGenerator from './components/AIGenerator';
import AISuggestions from './components/AISuggestions';
import { socialMedia } from './socials';


const App: React.FC = () => {
  return (
    <div className="antialiased font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 my-16">
        
        <Section title="AI-Powered Tools" collapsible={false}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                <AIGenerator />
                <AISuggestions />
            </div>
        </Section>

        <Section title="System Overview" collapsible initialOpen={true}>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            This system is a state-of-the-art defect detection platform engineered by HERE AND NOW AI to bring intelligent, real-time quality control to the heart of your manufacturing line. By leveraging cutting-edge AI and computer vision, it identifies anomalies and imperfections as they happen, not after the fact. This immediate identification is crucial for minimizing waste, maintaining stringent quality standards, and ensuring operational excellence in today's fast-paced production environments.
          </p>
        </Section>
        
        <Section title="Key Features" collapsible initialOpen={true}>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {KEY_FEATURES.map((feature: CardItem) => (
              <InfoCard key={feature.title} {...feature} />
            ))}
          </div>
        </Section>

        <Section title="Core Benefits" collapsible initialOpen={true}>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit: CardItem) => (
              <InfoCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </Section>

        <Section title="Versatile Use Cases" collapsible initialOpen={true}>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {USE_CASES.map((useCase: CardItem) => (
              <InfoCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Section title="Technological Specifications" collapsible={false}>
            <div className="mt-6 space-y-8">
              {TECH_SPECS.map((spec) => (
                <div key={spec.category}>
                  <h4 className="text-lg font-semibold" style={{color: 'var(--color-primary)'}}>{spec.category}</h4>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    {spec.details.map((detail) => (
                      <li key={detail.name} className="flex justify-between border-b border-gray-700 py-1">
                        <span>{detail.name}:</span>
                        <span className="font-medium text-gray-300 text-right">{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Version Information" collapsible={false}>
            <div className="mt-6 rounded-lg p-6 border border-gray-700" style={{backgroundColor: 'var(--color-secondary-light)'}}>
              <div className="flex justify-between items-baseline">
                <h4 className="text-lg font-bold text-white">
                  Version {VERSION_INFO.version} <span style={{color: 'var(--color-primary)'}}>"{VERSION_INFO.codename}"</span>
                </h4>
                <span className="text-sm text-gray-400">{VERSION_INFO.date}</span>
              </div>
              <p className="mt-4 text-gray-400">Latest release updates:</p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-gray-300">
                {VERSION_INFO.updates.map((update, index) => (
                  <li key={index}>{update}</li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700">
                 <h5 className="font-semibold text-white">Future Roadmap:</h5>
                 <p className="text-sm text-gray-400 mt-2">Q4 2024: Integration with 3D scanning hardware. <br/> Q1 2025: Self-supervised learning model for zero-shot defect classification.</p>
              </div>
            </div>
          </Section>
        </div>

        <Section title="Conclusion" collapsible={false}>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            In modern manufacturing, the pursuit of perfection is relentless. Implementing an advanced real-time defect detection system is no longer a luxury but a strategic imperative. It empowers businesses to achieve unparalleled levels of quality and efficiency, transforming the production line into a self-correcting, intelligent ecosystem that drives profitability and secures a competitive edge.
          </p>
        </Section>
      </main>
      <footer className="text-center py-8 border-t border-gray-800 mt-16">
        <div className="flex justify-center items-center space-x-6 mb-4">
            {Object.entries(socialMedia).map(([name, {url, icon}]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" style={{'--hover-color': 'var(--color-primary)'} as React.CSSProperties}
                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'}
                   onMouseOut={(e) => e.currentTarget.style.color = ''}>
                    <span className="sr-only">{name}</span>
                    {icon}
                </a>
            ))}
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} HERE AND NOW AI. designed with passion for innovation.
        </p>
         <p className="text-sm text-gray-400 mt-2">
            developed by Avinash [AI products engineering team]
        </p>
      </footer>
    </div>
  );
};

export default App;
