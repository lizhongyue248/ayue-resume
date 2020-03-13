import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>个人独立博主</>,
    imageUrl: 'img/first.svg',
    description: (
      <>
        拥有属于自己的个人独立博客，专注于原创文章编写；善于总结、
        分享个人经验，热衷于所学专业，对大多事物抱有兴趣，具有较强的自学能力。
      </>
    ),
  },
  {
    title: <>开源爱好者</>,
    imageUrl: 'img/second.svg',
    description: (
      <>
        活跃于多个开源社区，善于发现优秀的开源项目，提交过多个 issue 与 pr；
        热衷于开源事业，开源所有项目代码，具有强烈的开源精神。
      </>
    ),
  },
  {
    title: <>Linux 爱好者</>,
    imageUrl: 'img/third.svg',
    description: (
      <>
        红帽认证工程师，Manjaro 主力开发系统，乐于追溯行业新技术，
        拥有较强的学习能力和接受能力，能够独立解决诸多问题。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <hr />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description={siteConfig.tagline}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.avatar} src="https://resources.echocow.cn/avatar/me.jpg" alt="me"/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/base')}>
              查看
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
