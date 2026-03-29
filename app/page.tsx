"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SkeletonCard from "@/components/SkeletonCard";

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await fetch("/api/recipes");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {loading
        ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
        : recipes.map((recipe) => (
            <Card key={recipe.id} className="flex flex-col justify-between">
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={recipe.image} />
                  <AvatarFallback>{recipe.title.charAt(0)}</AvatarFallback>
                </Avatar>

                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} mins</CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button size="sm">View</Button>
                {recipe.vegan && <Badge>Vegan</Badge>}
              </CardFooter>
            </Card>
          ))}
    </div>
  );
}
