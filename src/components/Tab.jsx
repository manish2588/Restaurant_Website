import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="non-veg" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="non-veg">Non-Veg</TabsTrigger>
        <TabsTrigger value="veg">Veg</TabsTrigger>
        <TabsTrigger value="dessert">Dessert</TabsTrigger>
      </TabsList>
      <TabsContent value="non-veg" >
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Non-Veg</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Kukhurako Masu</h1>
              <p className=" font-thin">(Chicken Cooked In Nepali Style)</p>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif font-medium">Momocha</h1>
              <p className=" font-thin">
                (Minced Chicken Mixed With Spices, Wrapped In Flour Dough And
                Steamed)
              </p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Kwanti Ko Jhol</h1>
              <p className=" font-thin">
                (Mixed Beans Soup Made Out Of Nine Different Beans)
              </p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Bandel Tareko</h1>
              <p className=" font-thin">
                (Fried Wild-Boar Marinated With Nepali Spices)
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="veg">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Veg</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Aloo Tareko</h1>
              <p className=" font-thin">(Potatoes Fried In Nepali Style)</p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Kalo Daal</h1>
              <p className=" font-thin">(Black Lentil Tempered With Herbs)</p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Jhaneko Saag</h1>
              <p className=" font-thin">(Sauteed Spinach)</p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Mismas Tarkari</h1>
              <p className=" font-thin">(Seasonal Mixed Vegetable)</p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Achar</h1>
              <p className=" font-thin">(Fresh Tomato Pickle)</p>
            </div>
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Sada Bhuja</h1>
              <p className=" font-thin">(Steam Rice)</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="dessert">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Dessert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h1 className="font-serif font-medium">Shikarni</h1>
              <p className=" font-thin">
                (Sweet Yogurt Mixed With Cinamon, Cardamon Served With Dry
                Fruits)
              </p>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif font-medium">Ice-Cream</h1>
              <p className=" font-thin">(Varieties of flavour)</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
