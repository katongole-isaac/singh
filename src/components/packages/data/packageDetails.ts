import { IPackage } from '../packageCard'

interface Packages {
  silver: IPackage
  standard: IPackage
  business: IPackage
}

const commonFeatures = (max_cat_creation: number, tender_participation: number) => [
  'Seller Registration with GeM',
  'Profile Completion',
  'MSME Verification',
  'PAN/GST Validation',
  'Tax assessment',
  'DOE Compliance',
  'Seller ID Creation',
  'Brand Registration',
  'Bid/RA participation',

  `Catalogue Creation (Max ${max_cat_creation})`,
  `Tender participation (Max ${tender_participation})`,

  'Business Development Support',
  'Annual Support for all GeM queries',
  'Pan India Tender Participation Support',
  'Tender Hand Holding Support',
  'Invoice / Dispatch Create',
  'Stock / Inventory Management',
]

/**
 * Silver Package
 *
 */
const silverFeatures = commonFeatures(40,40);

const Silver = {
  name: 'Silver Package',
  price: 29_999,
  features: silverFeatures,
  isPopular: false,
}

/**
 * Standard Package
 */
const standardFeatures = commonFeatures(70,70)
const standard = {
  name: 'Standard Package',
  price: 49_999,
  features: standardFeatures,
  isPopular: true,
}

/**
 * Business Package
 *
 */
const BusinessFeatures = commonFeatures(100,100);
const Business = {
  name: 'Business Package',
  price: 54_999,
  features: BusinessFeatures,
  isPopular: false,
}

const packages: Packages = {
  silver: Silver,
  standard: standard,
  business: Business,
}

export default packages
