// Article Service
// This service loads article data from JSON files
// When backend is ready, replace these imports with API calls

import doggerlandData from '@content/articles/doggerland.json';
import cultureleInvloedData from '@content/articles/culturele-invloed.json';
import militaireRoboticaData from '@content/articles/militaire-robotica.json';
import soevereiniteitData from '@content/articles/soevereiniteit.json';
import digitalisatieEducatieData from '@content/articles/digitalisatie-educatie.json';
import gezondeVoedingData from '@content/articles/gezonde-voeding.json';
import digitaalRechtssysteemData from '@content/articles/digitaal-rechtssysteem.json';
import articlesIndex from '@content/articles/index.json';

// Map of all articles by slug
const articlesMap = {
  'doggerland': doggerlandData,
  'culturele-invloed': cultureleInvloedData,
  'militaire-robotica': militaireRoboticaData,
  'soevereiniteit': soevereiniteitData,
  'digitalisatie-educatie': digitalisatieEducatieData,
  'gezonde-voeding': gezondeVoedingData,
  'digitaal-rechtssysteem': digitaalRechtssysteemData,
};

/**
 * Get an article by its slug
 * @param {string} slug - The article slug
 * @returns {Object|null} The article data or null if not found
 */
export function getArticle(slug) {
  return articlesMap[slug] || null;
}

/**
 * Get all articles (summary info only)
 * @returns {Array} Array of article summaries
 */
export function getAllArticles() {
  return articlesIndex.articles;
}

/**
 * Get article summary by slug
 * @param {string} slug - The article slug
 * @returns {Object|null} The article summary or null if not found
 */
export function getArticleSummary(slug) {
  return articlesIndex.articles.find(article => article.slug === slug) || null;
}

// Future: Replace with API calls
// export async function getArticle(slug) {
//   const response = await fetch(`/api/articles/${slug}`);
//   if (!response.ok) return null;
//   return response.json();
// }
//
// export async function getAllArticles() {
//   const response = await fetch('/api/articles');
//   return response.json();
// }
