/*
 * Copyright 2019 Pnoker. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.pnoker.center.dbs.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.pnoker.center.dbs.mapper.RtmpMapper;
import com.pnoker.center.dbs.service.RtmpService;
import com.pnoker.common.base.BasePage;
import com.pnoker.common.dto.Dc3Page;
import com.pnoker.common.model.rtmp.Rtmp;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>Rtmp 接口实现
 *
 * @author : pnoker
 * @email : pnokers@icloud.com
 */
@Slf4j
@Service
public class RtmpServiceImpl implements RtmpService {
    @Autowired
    private RtmpMapper rtmpMapper;

    @Override
    public boolean add(Rtmp rtmp) {
        return rtmpMapper.insert(rtmp) > 0;
    }

    @Override
    public boolean delete(Long id) {
        return rtmpMapper.deleteById(id) > 0;
    }

    @Override
    public boolean update(Rtmp rtmp) {
        return rtmpMapper.updateById(rtmp) > 0;
    }

    @Override
    public Dc3Page<Rtmp> list(Rtmp rtmp, BasePage pageInfo) {
        QueryWrapper<Rtmp> queryWrapper = new QueryWrapper<>();
        query(rtmp, queryWrapper);
        pageInfo.orderBy(queryWrapper);
        Page<Rtmp> page = new Page<>(pageInfo.getPageNum(), pageInfo.getPageSize());
        return new Dc3Page<>(rtmpMapper.selectPage(page, queryWrapper));
    }

    @Override
    public Rtmp selectById(Long id) {
        return rtmpMapper.selectById(id);
    }

    @Override
    public void query(Rtmp rtmp, QueryWrapper<Rtmp> queryWrapper) {
        //todo java8
        if (rtmp.getAutoStart() != null) {
            if (rtmp.getAutoStart()) {
                queryWrapper.eq("auto_start", true);
            } else {
                queryWrapper.eq("auto_start", false);
            }
        }
        //todo java8
        if (null != rtmp.getName() && !"".equals(rtmp.getName())) {
            queryWrapper.like("name", rtmp.getName());
        }
    }

}
