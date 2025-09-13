import React from 'react';
import type { CardItem, TechSpec, VersionInfo } from './types';

const iconClasses = "h-8 w-8 text-primary";

export const KEY_FEATURES: CardItem[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    title: "Real-Time Monitoring",
    description: "Utilizes high-speed computer vision and advanced machine learning algorithms to continuously scan the production line, identifying defects with millisecond latency."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Immediate Corrective Actions",
    description: "Instantly triggers alerts to operators via dashboards and mobile notifications, or interfaces with PLCs to automate machinery adjustments and divert faulty products."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Data Analytics & Predictive Maintenance",
    description: "Aggregates defect data to reveal trends, root causes, and patterns. Predictive models forecast potential failures, enabling proactive maintenance scheduling."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: "Seamless Integration",
    description: "Offers robust API endpoints and supports standard industrial protocols (e.g., OPC-UA, Modbus) for easy integration with existing MES, ERP, and SCADA systems."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Intuitive User Interface",
    description: "A clean, responsive dashboard provides live video feeds, defect highlighting, key performance indicators, and historical data, all in an easily digestible format."
  },
];

export const BENEFITS: CardItem[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
    title: "Drastic Cost Reduction",
    description: "Significantly minimizes material waste, scrap, and rework costs by catching defects the moment they occur, not at the end of the line."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: "Improved Product Quality",
    description: "Ensures higher consistency and adherence to quality standards, boosting brand reputation and customer satisfaction."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: "Enhanced Production Efficiency",
    description: "Increases throughput by reducing downtime and manual inspection bottlenecks, leading to a more streamlined and efficient operation."
  }
];

export const USE_CASES: CardItem[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1zM21 11V5a2 2 0 00-2-2H7" /></svg>,
    title: "Automotive Manufacturing",
    description: "Inspection of paint finishes, weld integrity, casting imperfections, and correct assembly of components."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><circle cx={12} cy={12} r={4} /></svg>,
    title: "Electronics & Semiconductors",
    description: "Detecting flaws in PCB soldering, microchip wafer defects, and screen blemishes on consumer devices."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} style={{color: 'var(--color-primary)'}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-2.387-.477a2 2 0 01-.547-1.806zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
    title: "Pharmaceuticals & Packaging",
    description: "Ensuring correct fill levels, label placement accuracy, package integrity, and tablet/capsule quality control."
  }
];

export const TECH_SPECS: TechSpec[] = [
  {
    category: "Software",
    details: [
      { name: "Core Framework", value: "Aegis Vision Engine v3.2" },
      { name: "AI/ML Models", value: "Custom CNNs (YOLOv8, ResNet-50 adapted)" },
      { name: "ML Framework", value: "PyTorch 2.1 / TensorFlow 2.12" },
      { name: "Data Pipeline", value: "Apache Kafka & Spark Streaming" },
    ],
  },
  {
    category: "Hardware Requirements (per line)",
    details: [
      { name: "Processing Unit", value: "NVIDIA Jetson AGX Orin or equivalent GPU server" },
      { name: "Cameras", value: "Basler ace 2 / FLIR Blackfly S (GigE)" },
      { name: "Lighting", value: "High-intensity LED with controller" },
      { name: "Network", value: "10GbE for real-time video stream" },
    ],
  },
];

export const VERSION_INFO: VersionInfo = {
  version: "3.2.1",
  codename: "Orion",
  date: "Q2 2024",
  updates: [
    "Introduced anomaly detection for previously unseen defect types.",
    "Enhanced model quantization for 30% faster inference on edge devices.",
    "Redesigned reporting module with customizable PDF exports.",
    "Improved OPC-UA integration with support for historical data access."
  ],
};