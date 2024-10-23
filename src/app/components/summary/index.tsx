import { useTranslations } from "next-intl";

export default function Summary() {
  const t = useTranslations('HomePage');

  const summaryItems = [
    t('summary.item1'),
    t('summary.item2'),
    t('summary.item3')
  ];

  return (
    <div id="about" className="mb-36">
      {summaryItems.map((text, index) => (
        <p key={index} className="text-justify lg:mb-3 md:mb-0 text-slate-500">{text}</p>
      ))}
    </div>
  );
}
