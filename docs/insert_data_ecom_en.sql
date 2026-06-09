-- =============================================
-- Sample Data for E-Commerce Database (English)
-- =============================================

-- 1. categories
INSERT INTO `categories` (`name`) VALUES
('Smartphones'),
('Laptops'),
('Headphones'),
('Tablets'),
('Accessories');

-- 2. products
INSERT INTO `products` (`name`, `description`, `price`, `category_id`) VALUES
('iPhone 16 Pro', 'Apple smartphone 6.3 inch screen, A18 Pro chip', 45900.00, 1),
('Samsung Galaxy S25', 'Samsung smartphone 6.2 inch screen, Snapdragon 8 Elite chip', 32900.00, 1),
('MacBook Air M3', 'Apple laptop 15 inch screen, RAM 16GB SSD 512GB', 44900.00, 2),
('AirPods Pro 2', 'Apple wireless noise-canceling headphones USB-C', 8990.00, 3),
('iPad Air M2', 'Apple tablet 13 inch screen, M2 chip', 33900.00, 4);

-- 3. product_images
INSERT INTO `product_images` (`product_id`, `image_name`) VALUES
(1, 'iphone16pro-front.jpg'),
(1, 'iphone16pro-back.jpg'),
(2, 'galaxy-s25-front.jpg'),
(3, 'macbook-air-m3-silver.jpg'),
(4, 'airpods-pro2-case.jpg');

-- 4. customers
INSERT INTO `customers` (`name`, `address`, `phone`) VALUES
('Somchai Jaidee', '123 Sukhumvit Rd, Khlong Toei, Khlong Toei, Bangkok 10110', '081-234-5678'),
('Somying Rakrian', '456 Chiang Mai-Lampang Rd, Chang Phueak, Mueang, Chiang Mai 50300', '089-876-5432'),
('Wichai Codekeng', '789 Mittraphap Rd, Nai Mueang, Mueang, Nakhon Ratchasima 30000', '092-345-6789'),
('Napha Suksan', '321 Upparach Rd, Nai Mueang, Mueang, Ubon Ratchathani 34000', '063-456-7890'),
('Pimjai Design', '654 Ratchadamnoen Rd, Pratu Chai, Phra Nakhon Si Ayutthaya 13000', '095-567-8901');

-- 5. orders
INSERT INTO `orders` (`date`, `customer_id`, `status`, `total_amount`) VALUES
('2026-06-01 09:30:00', 1, 'delivered', 100790.00),
('2026-06-01 14:15:00', 2, 'delivered', 53890.00),
('2026-06-02 10:00:00', 3, 'processing', 41890.00),
('2026-06-02 16:45:00', 4, 'received', 78800.00),
('2026-06-03 08:20:00', 5, 'processing', 79800.00);

-- 6. order_items (10 rows)
INSERT INTO `order_items` (`order_id`, `product_id`, `quantity`, `price`) VALUES
-- Order #1: Somchai -> iPhone 16 Pro x2 + AirPods Pro 2 x1 = 100,790
(1, 1, 2, 45900.00),
(1, 4, 1, 8990.00),
-- Order #2: Somying -> MacBook Air M3 x1 + AirPods Pro 2 x1 = 53,890
(2, 3, 1, 44900.00),
(2, 4, 1, 8990.00),
-- Order #3: Wichai -> Galaxy S25 x1 + AirPods Pro 2 x1 = 41,890
(3, 2, 1, 32900.00),
(3, 4, 1, 8990.00),
-- Order #4: Napha -> MacBook Air M3 x1 + iPad Air M2 x1 = 78,800
(4, 3, 1, 44900.00),
(4, 5, 1, 33900.00),
-- Order #5: Pimjai -> iPhone 16 Pro x1 + iPad Air M2 x1 = 88,790
(5, 1, 1, 45900.00),
(5, 5, 1, 33900.00);
