import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Theme } from '../src/themes/theme.entity';

const now = new Date();

const themeData: { name: string; emoji: string }[] = [
  { name: 'Becoming a better parent', emoji: '👩‍👦' },
  { name: 'Becoming financially independent', emoji: '💰' },
  { name: 'Becoming spiritual', emoji: '☯️' },
  { name: 'Being a mentee', emoji: '🙋‍♀️' },
  { name: 'Being a mentor', emoji: '👩‍🚒' },
  { name: 'Building friendships', emoji: '💚' },
  { name: 'Building romantic relationships', emoji: '❤️' },
  { name: 'Challenge your beliefs', emoji: '🤯' },
  { name: 'Dealing with conflicts', emoji: '😠' },
  { name: 'Dealing with grief', emoji: '😢' },
  { name: 'Early-life crisis', emoji: '👶' },
  { name: 'Ending a relationship', emoji: '💔' },
  { name: 'Entering the workforce', emoji: '🐥' },
  { name: 'Expanding your professional network', emoji: '💎' },
  { name: 'Finding yourself', emoji: '🧐' },
  { name: 'Getting better with people', emoji: '😊' },
  { name: 'Getting in a good shape', emoji: '🏋🏽‍♀️' },
  { name: 'Getting mentally fit', emoji: '🤔' },
  { name: 'Getting promoted', emoji: '🎖' },
  { name: 'Getting shit done', emoji: '👩🏽‍💻' },
  { name: 'Immigrating', emoji: '🏃‍♂️' },
  { name: 'Late-life crisis', emoji: '🎅' },
  { name: 'Learning personal finance', emoji: '💸' },
  { name: 'Mid-life crisis', emoji: '🧟' },
  { name: 'Moving out', emoji: '🏠' },
  { name: 'Moving to a new city', emoji: '🏙' },
  { name: 'Organizing your environment', emoji: '📦' },
  { name: 'Retiring', emoji: '👵' },
  { name: 'Starting a business', emoji: '📋' },
  { name: 'Starting a family', emoji: '👪' },
  { name: 'Starting a new job', emoji: '👩‍🚀' },
  { name: 'Starting college', emoji: '👩‍🏫' },
  { name: 'Starting high school', emoji: '👨🏼‍🏫' },
  { name: 'Staying healthy', emoji: '🍏' },
  { name: 'Surviving a crisis', emoji: '🩹' },
];

const themes: Theme[] = themeData.map((theme) => ({
  id: uuid(),
  name: theme.name,
  emoji: theme.emoji,
  created: now,
  updated: now,
  experiences: [],
}));

export class ThemeSeed1592922164731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const entityManager = queryRunner.manager;
    themes.forEach((theme) => {
      entityManager.save(Theme, theme);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const entityManager = queryRunner.manager;
    await entityManager.query('TRUNCATE theme, experience');
  }
}
