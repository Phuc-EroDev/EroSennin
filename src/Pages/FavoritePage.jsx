import { Quote } from "lucide-react";
import ContentComponent from "~/Components/ContentComponent/ContentComponent";

const FavoritePage = () => {
  const quotes = [
    {
      text: "A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",
      context: "Về sự trưởng thành",
    },
    {
      text: "The true measure of a shinobi is not how he lives but how he dies.",
      context: "Về sự hy sinh",
    },
    {
      text: "Rejection is a part of any man's life. If you can't accept and move past rejection, or at least use it as writing material - you're not a real man.",
      context: "Về việc vượt qua thất bại",
    },
    {
      text: "Never give up without even trying. Do what you can, no matter how small the effect it may have!",
      context: "Về nghị lực",
    },
    {
      text: "When people get hurt, they learn to hate. When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind.",
      context: "Về đau đớn và lòng tốt",
    },
    {
      text: "A shinobi's life is not measured by how they lived, but rather what they managed to accomplish before their death.",
      context: "Về ý nghĩa cuộc đời",
    },
  ];

  return (
    <div>
      <ContentComponent label="Favorite Quotes">
        <div className="px-10 py-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              Jiraiya's Quotes
            </h2>
            <p className="text-gray-400 italic">
              Những câu nói truyền cảm hứng từ Jiraiya - The Gallant
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] p-6 rounded-xl hover:bg-[#353535] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#f6b846]/10"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-[#f6b846]/10 rounded-lg">
                      <Quote className="w-6 h-6 text-[#f6b846]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white text-lg leading-relaxed mb-3 italic">
                      "{quote.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-[2px] w-12 bg-[#f6b846]"></div>
                      <p className="text-[#f6b846] text-sm font-semibold">
                        {quote.context}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#f6b846]/20 to-transparent p-6 rounded-xl">
              <p className="text-gray-300 text-xl italic mb-2">
                "The Tale of Jiraiya the Gallant"
              </p>
              <p className="text-gray-500 text-sm">— Ero-Sennin</p>
            </div>
          </div>
        </div>
      </ContentComponent>
    </div>
  );
};

export default FavoritePage;
