export interface Produit {
    id?:number;
    nom_produit:String;
    nom_court : String;
    prixBase: number;
    prixVente: number;
    seuil_max_remise :number;
    unite_produit: String;
    img_produit:String;
    quantite_initiale: number;
    quantite_actuel:number;
}
