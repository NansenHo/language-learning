import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fb9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c05'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a5f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '265'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grammar/in_into_on_onto',
                component: ComponentCreator('/docs/grammar/in_into_on_onto', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grammar/in_on_at_by',
                component: ComponentCreator('/docs/grammar/in_on_at_by', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grammar/stative_verb_dynamic_verb',
                component: ComponentCreator('/docs/grammar/stative_verb_dynamic_verb', 'bdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grammar/tenses',
                component: ComponentCreator('/docs/grammar/tenses', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/1_1_字母',
                component: ComponentCreator('/docs/pronunciation/1_1_字母', '500'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/1_2_元音音标的标准读音',
                component: ComponentCreator('/docs/pronunciation/1_2_元音音标的标准读音', '87d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/1_3_双元音音标',
                component: ComponentCreator('/docs/pronunciation/1_3_双元音音标', 'e19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/1_4_辅音的标准读音',
                component: ComponentCreator('/docs/pronunciation/1_4_辅音的标准读音', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/1_5_元音音标纠音',
                component: ComponentCreator('/docs/pronunciation/1_5_元音音标纠音', 'a8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/1_6_辅音音标纠音',
                component: ComponentCreator('/docs/pronunciation/1_6_辅音音标纠音', '1d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/2_10_三步成音拼读法',
                component: ComponentCreator('/docs/pronunciation/2_10_三步成音拼读法', '55a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/2_11_单词重音的六种读法',
                component: ComponentCreator('/docs/pronunciation/2_11_单词重音的六种读法', '8f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/2_12_七种特殊音拼读',
                component: ComponentCreator('/docs/pronunciation/2_12_七种特殊音拼读', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/2_7_攻克长短元音（单元音）',
                component: ComponentCreator('/docs/pronunciation/2_7_攻克长短元音（单元音）', '4fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/2_8_攻克双元音',
                component: ComponentCreator('/docs/pronunciation/2_8_攻克双元音', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/2_9_攻克辅音',
                component: ComponentCreator('/docs/pronunciation/2_9_攻克辅音', '1ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/past_simple',
                component: ComponentCreator('/docs/pronunciation/past_simple', '75d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/sentences',
                component: ComponentCreator('/docs/pronunciation/sentences', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pronunciation/words',
                component: ComponentCreator('/docs/pronunciation/words', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/words_phrases/business_japanese',
                component: ComponentCreator('/docs/words_phrases/business_japanese', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/words_phrases/synonym_analysis/almost_nearly',
                component: ComponentCreator('/docs/words_phrases/synonym_analysis/almost_nearly', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/words_phrases/synonym_analysis/eat-out_eat-outside',
                component: ComponentCreator('/docs/words_phrases/synonym_analysis/eat-out_eat-outside', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/words_phrases/synonym_analysis/good_at_in_with',
                component: ComponentCreator('/docs/words_phrases/synonym_analysis/good_at_in_with', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/words_phrases/synonym_analysis/whore_bitch',
                component: ComponentCreator('/docs/words_phrases/synonym_analysis/whore_bitch', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/words_phrases/toeic',
                component: ComponentCreator('/docs/words_phrases/toeic', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
