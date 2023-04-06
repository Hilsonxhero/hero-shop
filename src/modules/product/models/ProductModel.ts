import { ComputedRef } from "vue"

export interface CategoryModel {
    id?: number
    title?: string
    title_en?: string
    slug?: string
}
export interface DeliveryModel {
    id?: number
    title?: string
    code?: string
}
export interface ShipmentModel {
    id?: number
    title?: string
}
export interface WarrantyModel {
    id?: number
    title?: string
}
export interface VariantGroupModel {
    id: number
    name?: string
    type?: string
    order?: number
}

export interface ProductCombinationModel {
    group: VariantGroupModel
    values?: Array<{
        id?: number
        variant_group_id?: string
        name?: string
        value?: number
        group?: VariantGroupModel
    }>
}
export interface CombinationModel {
    id?: number
    variant_id?: string
    label?: string
    value?: number
    type?: string
    group: VariantGroupModel
}

export interface SellerModel {
    id?: number
    title?: string
    code?: string
    registration_date?: string
}

export interface ProductVariantModel {
    id?: number
    seller?: SellerModel
    has_stock?: boolean
    shipment?: ShipmentModel
    is_announcemented_promotion?: boolean
    is_announcemented_availability?: boolean
    product?: number
    warranty?: WarrantyModel
    price?: number
    is_incredible?: boolean
    is_promotion?: boolean
    rrp_price?: number
    stock?: number
    order_limit?: number
    default_on?: boolean
    discount?: number
    selling_price?: number
    discount_expire_at?: string | null
    weight?: number
    shipment_price?: number
    combinations: CombinationModel[]
}


export interface ProductModel {
    title_fa: string
    title_en: string
    slug?: string
    category?: CategoryModel
    delivery?: DeliveryModel
    brand?: string
    combinations?: ProductCombinationModel[]
    features?: Array<object>
    default_variant: ProductVariantModel
    variants: ProductVariantModel[]
    review?: string
    media?: { main?: string, thumb?: string, galleries: Array<object> }
    rating?: string
    comments_count?: string
}
