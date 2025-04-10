# @fresh-stack/zustand
### Fuck the poor implementation of zustand

<p align="center">
    <img src=".github/img/logo.png" width="50%" alt="accessibility text">
</p>

Library with extra features for the Fresh full-stack framework, to implement Zustand in a more native and intuitive way for the hassle-free implementation of CSR islands.

```typescript
import { useClientStore } from 'jsr:@fresh-stack/zustand';
import { useProductsStore } from './store.ts'

export function Island({ props... }) {

    const { products } = useClientStore(useProductsStore);

    return (
        <div>
            {products}
        </div>
    )

}
```

## Big problem
Fresh first renders the islands in SSR and then implements the CSR to improve SEO. **Zustand doesn't know if it initially uses SSR or CSR**, but it does use a hook internally to validate the component using the client.

## Simply wrap your store
```typescript
const { ... } = useClientStore(/*Your store*/);
```
