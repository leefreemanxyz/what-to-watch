import { Cast } from "@/schema/show";
import { ShowImage } from "../show-image/show-image";

export const CastList = ({ cast }: { cast: Cast[] }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {cast.map((castMember, index) => {
        // normally we would use a key here, like the castMember.person.id
        // but it turns out this API returns duplicates(!)
        // so I'll just use the index, which is not ideal but works for now
        return (
          <div key={index}>
            <ShowImage
              width={150}
              height={210}
              key={castMember.person.name}
              image={castMember.person.image}
              name={`${castMember.person.name} / ${castMember.character.name}`}
            />
            <p className="text-xs">{castMember.character.name}</p>
            <p className="text-xs">{castMember.person.name}</p>
          </div>
        );
      })}
    </div>
  );
};
