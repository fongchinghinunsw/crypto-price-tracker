const mockGetResponse = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    current_price: 20000,
    total_volume: 12004041094,
    price_change_24h: -12241,
  },
  {
    id: "solana",
    name: "Solana",
    current_price: 87,
    total_volume: 200876648,
    price_change_24h: 122,
  },
  {
    id: "litecoin",
    name: "Litecoin",
    current_price: 37,
    total_volume: 20087648,
    price_change_24h: 12,
  },
];

const mockResponse = {
  get: jest.fn().mockResolvedValue({ data: mockGetResponse }),
};

export default mockResponse;
