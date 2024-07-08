import { Container } from "@/common/container";
import style from "./heroSection.module.css";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <div className={style.heroSection}>
      <Container>
        <div className={style.welcomeSection}>
          <Image
            className={style.welcomeSectionItems}
            quality={80}
            width={288}
            height={180}
            src="/images/bg_section.png"
            alt="عکس هدر"
          ></Image>
          <div className={style.welcomeSectionItems}>
            <p className={style.welcomeTitle}>به وبلاگ پژواک خوش آمدید!</p>
            <p className={style.welcomeText}>
              پژواک، انعکاس تازه‌ترین اخبار و ایده‌ها
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};