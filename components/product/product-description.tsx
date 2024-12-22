import { AddToCart } from 'components/cart/add-to-cart';
import { ContactToBuy } from 'components/contact-to-buy';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/provider/types';
import { VariantSelector } from './variant-selector';

const { ALLOW_CART } = process.env;

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      {ALLOW_CART === 'true' ? <AddToCart product={product} /> : <ContactToBuy product={product} />}
    </>
  );
}
