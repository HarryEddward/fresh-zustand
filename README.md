# @fresh-stack/zustand
### Fuck the poor implementation of zustand

<p align="center">
    <img src=".github/img/logo.png" width="50%" alt="accessibility text">
</p>

Library with extra features for the Fresh full-stack framework, to implement Zustand in a more native and intuitive way for the hassle-free implementation of CSR islands.


## Fast implementation
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

## Modulable implementation
```typescript
// @islands/store/storeProducts.ts

import { useClientStore } from 'jsr:@fresh-stack/zustand';

interface StateProducts = {
    /*...*/
}
const useProductsStoreZustand = create<StateProducts>((set) => (
    /*...*/
))

// Hook function (CSR)
export function useProducts() {
    return useClientStore(useProductsStoreZustand);
}
```
```typescript
// @islands/Island.tsx

import { useProductsStore } from './store.ts'

export function Island({ props... }) {

    const { products } = useProductsStore();

    return (
        <div>
            {products}
        </div>
    )

}
```

## Credits

<p align="center">
  <a href="https://gravatar.com/au7812ooae32">
  <img width="120px" height="120px" src="https://pypi-camo.freetls.fastly.net/36f397b09a7781d43d862d849361e2e6ae718ca6/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f39663431306239623365363937333832303965366131343163636137623339653f73697a653d313430">
  </a>
</p>
<p align="center">
  <a href="https://www.instagram.com/__adrian__martin__/"><b>Instagram</b></a> ·
  <a href="https://pypi.org/user/AdriaMartin/"><b>PyPi</b></a> ·
  <a href="https://gravatar.com/au7812ooae32"><b>Profile</b></a> ·
  <a href="https://github.com/HarryEddward/to_literal"><b>Github</b></a>
</p>
<p align="center">
  <span><b>Desarrollador Frontend</b></span> -
  <span><b>Desarrollador Backend</b></span> -
  <span><b>Desarrollador Devops</b></span> -
  <span><b>Instalador</b></span> -
  <span><b>Configurador</b></span>
</p>