import { UseTranslation } from "@/app/i18n";
import NotFound from "@/components/global/NotFound";
import { Metadata, ResolvingMetadata } from "next";


type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = params.lang;

  // fetch data]
  const { t } = await UseTranslation(lang, "metadata");

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t("notfound.title"),
    description: t("default.description"),
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await UseTranslation(lang, "not-found");
  return(
    <NotFound back={t("back")} text={t("text")} title={t("title")} />
  )
}
