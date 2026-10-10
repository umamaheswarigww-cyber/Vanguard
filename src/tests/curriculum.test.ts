import { describe, it, expect } from 'vitest';
import { PILLARS, MODULES } from '../content/curriculum/pillars';
import { LESSONS, getLessonById } from '../content/lessons';
import { GLOSSARY } from '../content/glossary/glossary';

describe('Curriculum Architecture & PS Traceability', () => {
  it('covers all four required pillars from Vanguard problem statement', () => {
    const pillarIds = PILLARS.map(p => p.id);
    expect(pillarIds).toContain('budget');
    expect(pillarIds).toContain('save');
    expect(pillarIds).toContain('invest');
    expect(pillarIds).toContain('safe');
    expect(PILLARS.length).toBe(4);
  });

  it('all modules reference existing pillars', () => {
    const pillarIds = new Set(PILLARS.map(p => p.id));
    MODULES.forEach(mod => {
      expect(pillarIds.has(mod.pillarId)).toBe(true);
    });
  });

  it('all lessons have English and Telugu titles and content', () => {
    LESSONS.forEach(lesson => {
      expect(lesson.title.en).toBeTruthy();
      expect(lesson.title.te).toBeTruthy();
      expect(lesson.stages.length).toBeGreaterThan(0);

      lesson.stages.forEach(stg => {
        expect(stg.content.en).toBeTruthy();
        expect(stg.content.te).toBeTruthy();
      });
    });
  });

  it('all lesson prerequisites resolve to existing lessons or are empty', () => {
    const allLessonIds = new Set(LESSONS.map(l => l.id));
    LESSONS.forEach(lesson => {
      lesson.prerequisites.forEach(prereqId => {
        expect(allLessonIds.has(prereqId)).toBe(true);
      });
    });
  });

  it('each lesson has clear learning objectives with valid evidence types', () => {
    const validEvidence = new Set(['explain', 'calculate', 'predict', 'identify', 'compare', 'classify', 'apply']);
    LESSONS.forEach(lesson => {
      expect(lesson.learningObjectives.length).toBeGreaterThan(0);
      lesson.learningObjectives.forEach(obj => {
        expect(obj.description.en).toBeTruthy();
        expect(obj.description.te).toBeTruthy();
        expect(validEvidence.has(obj.evidenceType)).toBe(true);
      });
    });
  });

  it('all glossary terms have bilingual definitions and valid pillar references', () => {
    const pillarIds = new Set(PILLARS.map(p => p.id));
    GLOSSARY.forEach(term => {
      expect(term.term.en).toBeTruthy();
      expect(term.term.te).toBeTruthy();
      expect(term.shortDefinition.en).toBeTruthy();
      expect(term.shortDefinition.te).toBeTruthy();
      expect(pillarIds.has(term.pillarId)).toBe(true);
    });
  });

  it('implements deep Stock Market Academy curriculum', () => {
    const lessonIds = new Set(LESSONS.map(l => l.id));
    expect(lessonIds.has('businesses-and-shares')).toBe(true);
    expect(lessonIds.has('stock-market-mechanics')).toBe(true);
    expect(lessonIds.has('stock-market-ecosystem')).toBe(true);
    expect(lessonIds.has('market-indices')).toBe(true);
    expect(lessonIds.has('company-financials')).toBe(true);
    expect(lessonIds.has('financial-ratios')).toBe(true);
  });

  it('implements deep Mutual Fund Academy curriculum', () => {
    const lessonIds = new Set(LESSONS.map(l => l.id));
    expect(lessonIds.has('mutual-fund-basics')).toBe(true);
    expect(lessonIds.has('mutual-fund-structure')).toBe(true);
    expect(lessonIds.has('fund-types')).toBe(true);
    expect(lessonIds.has('active-vs-passive')).toBe(true);
    expect(lessonIds.has('sip-lab')).toBe(true);
  });

  it('contains comprehensive glossary with 45+ bilingual terms', () => {
    expect(GLOSSARY.length).toBeGreaterThanOrEqual(45);
  });
});
