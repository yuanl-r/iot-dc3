/*
 * Copyright 2016-present Pnoker All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.github.pnoker.center.data.strategy;

import io.github.pnoker.center.data.service.RepositoryService;
import io.github.pnoker.common.constant.common.ExceptionConstant;
import io.github.pnoker.common.constant.StrategyConstant;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Point Value 存储策略工厂
 *
 * @author pnoker
 * @since 2022.1.0
 */
public class RepositoryStrategyFactory {

    private RepositoryStrategyFactory() {
        throw new IllegalStateException(ExceptionConstant.UTILITY_CLASS);
    }

    private static final Map<String, RepositoryService> savingStrategyServiceMap = new ConcurrentHashMap<>();

    public static List<RepositoryService> get() {
        return new ArrayList<>(savingStrategyServiceMap.values());
    }

    public static RepositoryService get(String name) {
        return savingStrategyServiceMap.get(StrategyConstant.Storage.REPOSITORY_PREFIX + name);
    }

    public static void put(String name, RepositoryService service) {
        savingStrategyServiceMap.put(StrategyConstant.Storage.REPOSITORY_PREFIX + name, service);
    }
}
