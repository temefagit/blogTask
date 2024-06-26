import Articles from '../articles/index';
import Comments from '../comments/index';

import style from './section.module.css';
import { Container } from '@/common/container';

export default function Section() {
    return (
        <section className={style.section}>
            <div className={style.wrapper}>
                <Container>

                    <div className={style.contentSection}>
                        <div className={style.articles}>
                            <div className={style.title}>
                                <h2 className={style.articleSectionTitle}>جدیدترین‌ها</h2>
                            </div>
                            <div className={style.articlesItems}>
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                                <Articles />
                            </div>
                        </div>
                        <div className={style.comments}>
                            <div className={style.title}>
                                <h2 className={style.commentSectionTitle}>آخرین نظرات</h2>
                            </div>
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                        </div>
                    </div>
                </Container>

            </div>
        </section>

    )
}