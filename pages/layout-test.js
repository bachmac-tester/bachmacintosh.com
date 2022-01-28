import { NextSeo, } from "next-seo";
import CloudinaryImage from "../components/CloudinaryImage";
import DefaultLayout from "../components/DefaultLayout";
import {Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph,} from "../components/layout/Typography";

export default function LayoutTest() {
  return (
      <DefaultLayout>
          <NextSeo
              title="Layout Test"
              description="A temporary page to test the site layout; delete before going live."
          />
          <Heading1>BachMacintoshBachMacintoshBachMacintoshBachMacintosh</Heading1>
          <Heading1>H1 test</Heading1>
          <Heading2>H2 test</Heading2>
          <Heading3>H3 test</Heading3>
          <Heading4>H4 Test</Heading4>
          <Heading5>H5 Test</Heading5>
          <Heading6>H6 Test</Heading6>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis turpis sed risus lobortis vulputate in a eros. Donec massa orci, ultricies eu magna auctor, feugiat sagittis nulla. Nulla mollis elementum felis vel congue. Maecenas ultricies interdum purus eu sodales. Proin porttitor dui in nunc vestibulum, pulvinar convallis augue aliquam. Mauris ultrices volutpat felis ac scelerisque. Sed laoreet justo et accumsan ultrices. Nulla eget erat nunc. Duis eleifend interdum lorem, rhoncus suscipit sem fermentum id. Sed imperdiet mi vel orci faucibus varius. Vivamus rutrum elit ac metus dictum mollis. Integer eros nulla, scelerisque ut risus non, venenatis molestie diam. Aliquam vitae urna nec urna aliquet sollicitudin. Curabitur sagittis, enim eu sollicitudin auctor, justo erat porta nisl, in ultrices libero dolor ut nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Paragraph>
              <Heading1>H1 test</Heading1>
          <Paragraph>Quisque eu accumsan ex. Vestibulum eleifend eget lacus eu mollis. Nam sapien lectus, sollicitudin ac consectetur vel, molestie rhoncus nunc. Vivamus varius ligula sed odio fringilla posuere. Nam sollicitudin, ipsum nec luctus ultricies, dolor nisi iaculis metus, ac eleifend diam odio sed velit. Donec volutpat mauris nisi, id accumsan diam consectetur at. Mauris mollis enim id faucibus mollis. Proin dictum orci et velit dictum, eget molestie odio placerat. Vivamus non convallis ante. Vestibulum sed massa ut tortor porttitor aliquet. Donec at mauris nec urna finibus viverra. Sed viverra urna sed neque molestie, ut ullamcorper diam tincidunt.</Paragraph>
              <Heading2>H2 test</Heading2>
          <Paragraph>Proin in nisl eget metus aliquam iaculis. Nunc tempor sagittis arcu. Vivamus sed vestibulum lorem. Proin quis consequat eros. Nullam volutpat sed magna ut elementum. Pellentesque quis tincidunt neque, sit amet congue lorem. Nulla convallis scelerisque interdum. Sed feugiat dui et ipsum gravida, id egestas orci cursus. Vestibulum vehicula nulla et pharetra hendrerit.</Paragraph>
              <Heading3>H3 test</Heading3>
          <CloudinaryImage alt="Helga talking to her former nanny" src="/helga.png"  />
              <Paragraph>Ut laoreet ornare nunc, nec congue sem tristique vel. Vivamus in lectus vitae odio viverra venenatis in id nibh. Fusce a magna in libero sollicitudin dignissim at a nibh. Nam convallis, ipsum a bibendum finibus, arcu lorem consequat ipsum, ut scelerisque turpis nisl non ipsum. Duis accumsan ligula ac sem tempor accumsan. Nulla fermentum ipsum nunc, ut semper dui molestie vel. Mauris aliquet leo a tellus aliquet, eget tempor lacus consequat. Suspendisse ullamcorper lobortis urna, at accumsan erat porttitor non. Nullam et sollicitudin dui, sed vestibulum eros. Morbi dapibus lectus et risus porttitor molestie. Proin a lectus et enim placerat pellentesque in quis sem. Nullam maximus libero ut mattis euismod. Nam auctor sem venenatis porttitor tristique. Aenean pellentesque nulla orci, quis vehicula lorem rhoncus cursus. Nam aliquam condimentum ullamcorper. Praesent tellus metus, porttitor et ante et, pharetra venenatis tortor.</Paragraph>
          <Paragraph>Vivamus pretium aliquam sapien, sit amet ultricies erat sollicitudin ut. Morbi vestibulum molestie metus, vel commodo odio malesuada a. Vestibulum ante sapien, pharetra eu tristique ac, suscipit id ligula. Morbi eros odio, porttitor suscipit quam et, consectetur porta libero. In cursus, risus quis consequat ullamcorper, lectus lectus dictum diam, in suscipit nunc sapien a metus. Fusce eu semper sapien, a molestie lectus. Sed tempor posuere arcu, at vestibulum felis. In porta id magna non auctor.</Paragraph>
      </DefaultLayout>
  );
}