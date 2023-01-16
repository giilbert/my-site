import { Layout } from "@/components/layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">About me</h1>
      <p className="text-xl leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        elementum purus. Nullam neque eros, gravida vel egestas nec, iaculis et
        felis. Morbi in mauris imperdiet, malesuada neque vel, aliquam felis.
        Fusce tincidunt tincidunt posuere. Vivamus vitae libero mattis,
        vulputate nibh sed, semper mauris. Aliquam a libero id elit volutpat
        imperdiet. Vivamus pellentesque lectus non lacus consectetur
        pellentesque. Phasellus quam mauris, mattis in dignissim nec, porttitor
        eget diam. Nulla varius tortor ante, vitae placerat metus hendrerit vel.{" "}
        <br />
        <br />
        Proin venenatis viverra urna ut tempor. Nullam a viverra est, vestibulum
        malesuada erat. Sed id tellus tortor. Nullam vitae massa ut tellus porta
        tincidunt. Ut elementum varius lorem eu sagittis. Etiam accumsan, urna a
        hendrerit molestie, massa diam tincidunt turpis, blandit tincidunt justo
        diam vel lorem. Cras facilisis nunc nisl, id facilisis ex pulvinar eu.
        Duis et libero massa. Sed vitae imperdiet orci. Mauris posuere hendrerit
        urna ut lacinia. <br />
        <br />
        Suspendisse ornare pellentesque lacus quis ullamcorper. Nunc auctor
        feugiat scelerisque. Pellentesque posuere quis justo eget eleifend.
        Vestibulum vitae luctus est. Suspendisse pellentesque orci et arcu
        tempor efficitur. Nunc ac finibus ligula. Integer ac lectus non felis
        aliquet ultrices. Proin dignissim orci id convallis molestie. Fusce ut
        ullamcorper nisl, nec dignissim velit. Morbi ut viverra nulla. Nullam
        metus quam, hendrerit at massa ut, interdum congue lorem. Cras ac mi
        molestie, hendrerit justo sit amet, ultricies neque. <br />
        In risus lacus, rhoncus at urna a, tincidunt malesuada mauris. Aenean a
        porta felis. Quisque pretium rutrum tristique. Nulla quis neque lectus.
        Fusce quis efficitur ex, ac laoreet erat. Donec in nulla ornare, euismod
        arcu vel, scelerisque felis. Donec ultricies placerat dui, eu commodo
        augue venenatis sit amet. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; <br />
        <br />
      </p>
    </Layout>
  );
};

export default AboutPage;
