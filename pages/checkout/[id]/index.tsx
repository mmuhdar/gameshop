import { useRouter } from "next/router";
import CheckoutLayout from "../../../components/CheckoutLayout";

import Layout from "../../../components/Layout";

export default function Checkout() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <CheckoutLayout id={id} />
    </Layout>
  );
}
