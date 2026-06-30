const mockData = {
  banners: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=300&fit=crop',
      link: '/pages/index/index',
      title: '新鲜直达 品质保证'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=300&fit=crop',
      link: '/pages/category/category',
      title: '限时特惠 低至5折'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=300&fit=crop',
      link: '/pages/index/index',
      title: '产地直采 新鲜美味'
    }
  ],
 
  categories: [
    {
      id: 1,
      name: '时令水果',
      icon: '🍎',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: '新鲜蔬菜',
      icon: '🥬',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: '肉禽蛋品',
      icon: '🥩',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      name: '海鲜水产',
      icon: '🦐',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=200&h=200&fit=crop'
    },
    {
      id: 5,
      name: '乳品烘焙',
      icon: '🥛',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop'
    },
    {
      id: 6,
      name: '粮油调味',
      icon: '🍚',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop'
    },
    {
      id: 7,
      name: '酒水饮料',
      icon: '🍺',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop'
    },
    {
      id: 8,
      name: '休闲零食',
      icon: '🍪',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop'
    },
    {
      id: 9,
      name: '速冻食品',
      icon: '🥟',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=200&h=200&fit=crop'
    },
    {
      id: 10,
      name: '进口食品',
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop'
    }
  ],
 
  seckillProducts: [
    {
      id: 101,
      name: '红富士苹果 5斤装',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
      price: 19.9,
      originalPrice: 39.9,
      sold: 2341,
      stock: 100,
      tag: '热卖'
    },
    {
      id: 102,
      name: '新鲜草莓 2盒装',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
      price: 29.9,
      originalPrice: 59.9,
      sold: 1856,
      stock: 50,
      tag: '特惠'
    },
    {
      id: 103,
      name: '海南香蕉 3斤',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
      price: 12.9,
      originalPrice: 25.9,
      sold: 3421,
      stock: 200,
      tag: '爆款'
    },
    {
      id: 104,
      name: '赣南脐橙 5斤',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop',
      price: 25.9,
      originalPrice: 49.9,
      sold: 987,
      stock: 80,
      tag: '新品'
    }
  ],
 
  newProducts: [
    {
      id: 201,
      name: '智利车厘子 J级 2斤',
      image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=300&h=300&fit=crop',
      price: 89.9,
      originalPrice: 129.9,
      sales: 567,
      isNew: true
    },
    {
      id: 202,
      name: '新西兰奇异果 10个',
      image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=300&h=300&fit=crop',
      price: 39.9,
      originalPrice: 59.9,
      sales: 892,
      isNew: true
    },
    {
      id: 203,
      name: '有机西兰花 2颗',
      image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop',
      price: 15.9,
      originalPrice: 22.9,
      sales: 456,
      isNew: true
    },
    {
      id: 204,
      name: '云南小番茄 2斤',
      image: 'https://images.unsplash.com/photo-1546470427-227c7c8e0b6e?w=300&h=300&fit=crop',
      price: 18.9,
      originalPrice: 28.9,
      sales: 723,
      isNew: true
    }
  ],
 
  hotProducts: [
    {
      id: 301,
      name: '澳洲安格斯牛排 200g*4',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop',
      price: 99.9,
      originalPrice: 159.9,
      sales: 2341,
      isHot: true
    },
    {
      id: 302,
      name: '挪威三文鱼 500g',
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&h=300&fit=crop',
      price: 79.9,
      originalPrice: 119.9,
      sales: 1856,
      isHot: true
    },
    {
      id: 303,
      name: '农家散养土鸡蛋 30枚',
      image: 'https://images.unsplash.com/photo-1598965421732-0b570e6f1b5a?w=300&h=300&fit=crop',
      price: 35.9,
      originalPrice: 49.9,
      sales: 5672,
      isHot: true
    },
    {
      id: 304,
      name: '纯牛奶 250ml*12盒',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
      price: 45.9,
      originalPrice: 65.9,
      sales: 3421,
      isHot: true
    },
    {
      id: 305,
      name: '黑猪五花肉 500g',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=300&fit=crop',
      price: 42.9,
      originalPrice: 59.9,
      sales: 1234,
      isHot: true
    },
    {
      id: 306,
      name: '基围虾 500g',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop',
      price: 58.9,
      originalPrice: 88.9,
      sales: 2156,
      isHot: true
    }
  ],
 
  allProducts: [
    {
      id: 1,
      categoryId: 1,
      name: '红富士苹果 5斤装 新鲜水果 脆甜多汁',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&h=600&fit=crop'
      ],
      price: 19.9,
      originalPrice: 39.9,
      sales: 2341,
      stock: 1000,
      unit: '5斤装',
      description: '精选山东烟台红富士苹果，果形端正，色泽鲜艳，果肉脆甜多汁，富含维生素，营养丰富。产地直采，新鲜直达。',
      specs: [
        { id: 's1', name: '5斤装', price: 19.9, stock: 500 },
        { id: 's2', name: '10斤装', price: 35.9, stock: 300 }
      ],
      isHot: true
    },
    {
      id: 2,
      categoryId: 1,
      name: '新鲜草莓 2盒装 奶油草莓 香甜可口',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop'
      ],
      price: 29.9,
      originalPrice: 59.9,
      sales: 1856,
      stock: 500,
      unit: '2盒/份',
      description: '精选奶油草莓，果实饱满，色泽艳丽，口感香甜，富含维生素C。当日采摘，新鲜配送。',
      specs: [
        { id: 's1', name: '2盒装', price: 29.9, stock: 200 },
        { id: 's2', name: '4盒装', price: 55.9, stock: 100 }
      ],
      isHot: true
    },
    {
      id: 3,
      categoryId: 1,
      name: '海南香蕉 3斤 进口香蕉 香甜软糯',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&h=600&fit=crop'
      ],
      price: 12.9,
      originalPrice: 25.9,
      sales: 3421,
      stock: 2000,
      unit: '3斤',
      description: '海南产地直采香蕉，果肉香甜软糯，营养丰富，老少皆宜。自然成熟，口感更佳。',
      specs: [
        { id: 's1', name: '3斤装', price: 12.9, stock: 1000 },
        { id: 's2', name: '5斤装', price: 19.9, stock: 500 }
      ],
      isHot: true
    },
    {
      id: 4,
      categoryId: 1,
      name: '赣南脐橙 5斤 新鲜橙子 维C满满',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600&h=600&fit=crop'
      ],
      price: 25.9,
      originalPrice: 49.9,
      sales: 987,
      stock: 800,
      unit: '5斤',
      description: '江西赣南脐橙，果大皮薄，果肉脆嫩，酸甜可口，富含维生素C。产地直供，品质保证。',
      specs: [
        { id: 's1', name: '5斤装', price: 25.9, stock: 400 },
        { id: 's2', name: '10斤装', price: 49.9, stock: 200 }
      ],
      isNew: true
    },
    {
      id: 5,
      categoryId: 1,
      name: '智利车厘子 J级 2斤 进口樱桃',
      image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop'
      ],
      price: 89.9,
      originalPrice: 129.9,
      sales: 567,
      stock: 300,
      unit: '2斤',
      description: '智利进口J级车厘子，果实硕大，果肉紧实，甜度高，口感极佳。空运直达，新鲜保证。',
      specs: [
        { id: 's1', name: 'J级 2斤', price: 89.9, stock: 200 },
        { id: 's2', name: 'JJ级 2斤', price: 129.9, stock: 100 }
      ],
      isNew: true
    },
    {
      id: 6,
      categoryId: 2,
      name: '有机西兰花 2颗 新鲜蔬菜 营养健康',
      image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=600&h=600&fit=crop'
      ],
      price: 15.9,
      originalPrice: 22.9,
      sales: 456,
      stock: 600,
      unit: '2颗',
      description: '有机种植西兰花，花球紧实，色泽翠绿，营养丰富，富含膳食纤维。当日采摘，新鲜配送。',
      specs: [
        { id: 's1', name: '2颗装', price: 15.9, stock: 300 },
        { id: 's2', name: '4颗装', price: 29.9, stock: 150 }
      ],
      isNew: true
    },
    {
      id: 7,
      categoryId: 2,
      name: '云南小番茄 2斤 圣女果 酸甜可口',
      image: 'https://images.unsplash.com/photo-1546470427-227c7c8e0b6e?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1546470427-227c7c8e0b6e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&h=600&fit=crop'
      ],
      price: 18.9,
      originalPrice: 28.9,
      sales: 723,
      stock: 800,
      unit: '2斤',
      description: '云南元谋小番茄，果实小巧玲珑，酸甜可口，富含番茄红素。生吃熟吃皆宜。',
      specs: [
        { id: 's1', name: '2斤装', price: 18.9, stock: 400 },
        { id: 's2', name: '4斤装', price: 35.9, stock: 200 }
      ],
      isNew: true
    },
    {
      id: 8,
      categoryId: 2,
      name: '新鲜胡萝卜 3斤 红心萝卜 甜脆多汁',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=600&fit=crop'
      ],
      price: 9.9,
      originalPrice: 15.9,
      sales: 1234,
      stock: 1500,
      unit: '3斤',
      description: '山东沙地胡萝卜，红心红皮，口感甜脆，富含胡萝卜素。炒菜炖汤凉拌皆宜。',
      specs: [
        { id: 's1', name: '3斤装', price: 9.9, stock: 800 },
        { id: 's2', name: '5斤装', price: 15.9, stock: 400 }
      ]
    },
    {
      id: 9,
      categoryId: 3,
      name: '澳洲安格斯牛排 200g*4 原切牛排',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop'
      ],
      price: 99.9,
      originalPrice: 159.9,
      sales: 2341,
      stock: 400,
      unit: '4片装',
      description: '澳洲进口安格斯牛肉，谷饲100天，原切牛排，大理石花纹丰富，口感鲜嫩多汁。',
      specs: [
        { id: 's1', name: '4片装', price: 99.9, stock: 200 },
        { id: 's2', name: '8片装', price: 189.9, stock: 100 }
      ],
      isHot: true
    },
    {
      id: 10,
      categoryId: 3,
      name: '农家散养土鸡蛋 30枚 新鲜鸡蛋',
      image: 'https://images.unsplash.com/photo-1598965421732-0b570e6f1b5a?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1598965421732-0b570e6f1b5a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600&h=600&fit=crop'
      ],
      price: 35.9,
      originalPrice: 49.9,
      sales: 5672,
      stock: 2000,
      unit: '30枚',
      description: '农家散养土鸡蛋，蛋黄饱满，蛋清浓稠，营养丰富，口感香醇。当日新鲜鸡蛋。',
      specs: [
        { id: 's1', name: '30枚装', price: 35.9, stock: 1000 },
        { id: 's2', name: '50枚装', price: 55.9, stock: 500 }
      ],
      isHot: true
    },
    {
      id: 11,
      categoryId: 3,
      name: '黑猪五花肉 500g 新鲜猪肉',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop'
      ],
      price: 42.9,
      originalPrice: 59.9,
      sales: 1234,
      stock: 600,
      unit: '500g',
      description: '本地黑猪五花肉，肥瘦相间，肉质鲜嫩，香味浓郁。红烧、烤肉、做馅料皆宜。',
      specs: [
        { id: 's1', name: '500g', price: 42.9, stock: 400 },
        { id: 's2', name: '1000g', price: 79.9, stock: 200 }
      ],
      isHot: true
    },
    {
      id: 12,
      categoryId: 4,
      name: '挪威三文鱼 500g 新鲜刺身 冰鲜空运',
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=600&fit=crop'
      ],
      price: 79.9,
      originalPrice: 119.9,
      sales: 1856,
      stock: 300,
      unit: '500g',
      description: '挪威进口冰鲜三文鱼，肉质细嫩，口感爽滑，富含Omega-3。空运直达，新鲜保证。',
      specs: [
        { id: 's1', name: '500g', price: 79.9, stock: 200 },
        { id: 's2', name: '1000g', price: 149.9, stock: 100 }
      ],
      isHot: true
    },
    {
      id: 13,
      categoryId: 4,
      name: '基围虾 500g 鲜虾 活冻白虾',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&h=600&fit=crop'
      ],
      price: 58.9,
      originalPrice: 88.9,
      sales: 2156,
      stock: 500,
      unit: '500g',
      description: '活冻基围虾，虾体完整，肉质紧实，鲜美弹牙。白灼、红烧、蒜蓉皆宜。',
      specs: [
        { id: 's1', name: '500g', price: 58.9, stock: 300 },
        { id: 's2', name: '1000g', price: 109.9, stock: 150 }
      ],
      isHot: true
    },
    {
      id: 14,
      categoryId: 5,
      name: '纯牛奶 250ml*12盒 全脂牛奶',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop'
      ],
      price: 45.9,
      originalPrice: 65.9,
      sales: 3421,
      stock: 1000,
      unit: '12盒',
      description: '优质纯牛奶，奶香浓郁，营养丰富，富含优质蛋白和钙质。早餐好选择。',
      specs: [
        { id: 's1', name: '12盒装', price: 45.9, stock: 600 },
        { id: 's2', name: '24盒装', price: 85.9, stock: 300 }
      ],
      isHot: true
    },
    {
      id: 15,
      categoryId: 5,
      name: '新西兰奇异果 10个 金果 进口猕猴桃',
      image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=600&h=600&fit=crop'
      ],
      price: 39.9,
      originalPrice: 59.9,
      sales: 892,
      stock: 500,
      unit: '10个',
      description: '新西兰进口佳沛金奇异果，果肉金黄，酸甜可口，富含维生素C。新鲜直达。',
      specs: [
        { id: 's1', name: '10个装', price: 39.9, stock: 300 },
        { id: 's2', name: '20个装', price: 75.9, stock: 150 }
      ],
      isNew: true
    },
    {
      id: 16,
      categoryId: 6,
      name: '五常大米 5kg 东北大米 稻花香米',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop'
      ],
      price: 69.9,
      originalPrice: 99.9,
      sales: 2567,
      stock: 800,
      unit: '5kg',
      description: '黑龙江五常稻花香大米，米粒饱满，米香浓郁，口感软糯。正宗东北大米。',
      specs: [
        { id: 's1', name: '5kg装', price: 69.9, stock: 500 },
        { id: 's2', name: '10kg装', price: 129.9, stock: 200 }
      ]
    },
    {
      id: 17,
      categoryId: 7,
      name: '青岛啤酒 500ml*12罐 经典啤酒',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop'
      ],
      price: 59.9,
      originalPrice: 79.9,
      sales: 1876,
      stock: 600,
      unit: '12罐',
      description: '青岛经典啤酒，麦香浓郁，口感清爽，泡沫细腻。百年品牌，品质保证。',
      specs: [
        { id: 's1', name: '12罐装', price: 59.9, stock: 400 },
        { id: 's2', name: '24罐装', price: 109.9, stock: 200 }
      ]
    },
    {
      id: 18,
      categoryId: 8,
      name: '每日坚果 25g*30包 混合坚果礼盒',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop'
      ],
      price: 69.9,
      originalPrice: 99.9,
      sales: 3421,
      stock: 1000,
      unit: '30包',
      description: '精选8种坚果果干，科学配比，营养均衡。每日一包，健康美味。',
      specs: [
        { id: 's1', name: '30包礼盒', price: 69.9, stock: 600 },
        { id: 's2', name: '60包礼盒', price: 129.9, stock: 300 }
      ]
    },
    {
      id: 19,
      categoryId: 9,
      name: '速冻水饺 500g*3袋 猪肉白菜馅',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=600&fit=crop'
      ],
      price: 45.9,
      originalPrice: 65.9,
      sales: 1567,
      stock: 800,
      unit: '3袋',
      description: '优质小麦粉制作面皮，精选猪肉白菜馅，皮薄馅大，美味可口。速冻锁鲜。',
      specs: [
        { id: 's1', name: '猪肉白菜 3袋', price: 45.9, stock: 400 },
        { id: 's2', name: '三鲜馅 3袋', price: 49.9, stock: 200 }
      ]
    },
    {
      id: 20,
      categoryId: 10,
      name: '意大利进口费列罗巧克力 T24粒礼盒',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop'
      ],
      price: 108.0,
      originalPrice: 148.0,
      sales: 2345,
      stock: 400,
      unit: '24粒',
      description: '意大利进口费列罗榛果威化巧克力，外层香脆，内层柔滑，送礼佳品。',
      specs: [
        { id: 's1', name: 'T24礼盒', price: 108.0, stock: 300 },
        { id: 's2', name: 'T30礼盒', price: 128.0, stock: 150 }
      ]
    }
  ]
};
 
module.exports = mockData;